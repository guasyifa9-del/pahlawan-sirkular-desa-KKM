import Papa from 'papaparse';
import { QuizData, Level, Question } from '../types';

/**
 * Expected CSV Headers:
 * level_id, id, question, option_a, option_b, option_c, correct_answer, education_message
 */
export async function fetchQuestionsFromCSV(url: string, baseQuizData: QuizData): Promise<QuizData> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSV: ${response.statusText}`);
    }
    
    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          try {
            const data = results.data as any[];
            
            // Clone base data to avoid mutating original
            const updatedData: QuizData = JSON.parse(JSON.stringify(baseQuizData));
            
            // Clear existing questions to prepare for override
            updatedData.levels.forEach(level => {
              level.questions = [];
            });

            data.forEach((row, index) => {
              const levelId = parseInt(row.level_id || row.levelId, 10);
              const questionId = parseInt(row.id || row.question_id || String(index + 1), 10);
              
              if (isNaN(levelId)) return; // Skip invalid rows

              const options = [
                row.option_a || row.optionA || '',
                row.option_b || row.optionB || '',
                row.option_c || row.optionC || ''
              ].filter(Boolean);

              const correctAnswerStr = (row.correct_answer || row.correctAnswer || '').trim().toUpperCase();
              
              // Determine correct index (0 for A, 1 for B, 2 for C)
              let correctIndex = 0;
              if (correctAnswerStr === 'B') correctIndex = 1;
              else if (correctAnswerStr === 'C') correctIndex = 2;
              else if (correctAnswerStr === 'D') correctIndex = 3;

              const question: Question = {
                id: questionId,
                question: row.question || '',
                options: options,
                correct_answer: correctAnswerStr,
                correct_index: correctIndex,
                education_message: row.education_message || row.educationMessage || ''
              };

              // Find or dynamically create the level
              let level = updatedData.levels.find(l => l.level_id === levelId);

              const rowThemeName = row.theme_name || row.themeName || row.theme || row.pelajaran || row.materi || row.mapel;
              const rowMascot = row.mascot || row.maskot;

              if (!level) {
                const mascots: ('Kompi' | 'Kreati' | 'Gizi')[] = ['Kompi', 'Kreati', 'Gizi'];
                const colors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0', '#E91E63', '#00BCD4', '#3F51B5'];
                
                const validMascot = (rowMascot && ['Kompi', 'Kreati', 'Gizi'].includes(rowMascot))
                  ? (rowMascot as 'Kompi' | 'Kreati' | 'Gizi')
                  : mascots[(levelId - 1) % 3];

                level = {
                  level_id: levelId,
                  theme_name: rowThemeName || `Misi Pelajaran ${levelId}`,
                  mascot: validMascot,
                  theme_color: colors[(levelId - 1) % colors.length],
                  questions: []
                };
                updatedData.levels.push(level);
              } else {
                if (rowThemeName) {
                  level.theme_name = rowThemeName;
                }
                if (rowMascot && ['Kompi', 'Kreati', 'Gizi'].includes(rowMascot)) {
                  level.mascot = rowMascot as 'Kompi' | 'Kreati' | 'Gizi';
                }
              }

              level.questions.push(question);
            });
            
            // Sort levels by level_id ascending
            updatedData.levels.sort((a, b) => a.level_id - b.level_id);

            // Make sure we only keep levels that actually have questions now
            updatedData.levels = updatedData.levels.filter(l => l.questions.length > 0);
            
            if (updatedData.levels.length === 0) {
              reject(new Error("No valid questions found in CSV"));
            } else {
              resolve(updatedData);
            }
          } catch (err) {
            reject(err);
          }
        },
        error: (error: any) => {
          reject(error);
        }
      });
    });
  } catch (error) {
    console.error("Error fetching or parsing CSV:", error);
    throw error;
  }
}
