

export interface AvatarOption {
  id: string;
  emoji: string;
  label: string;
  bg: string;
}

export const AVATAR_OPTIONS: AvatarOption[] = [
  { id: 'elang', emoji: '🦅', label: 'Tim Elang', bg: 'bg-emerald-500' },
  { id: 'harimau', emoji: '🐯', label: 'Tim Harimau', bg: 'bg-amber-500' },
  { id: 'melati', emoji: '🌸', label: 'Tim Melati', bg: 'bg-pink-500' },
  { id: 'garuda', emoji: '🦅', label: 'Tim Garuda', bg: 'bg-indigo-500' },
  { id: 'kelinci', emoji: '🐰', label: 'Tim Kelinci', bg: 'bg-purple-500' },
  { id: 'jeruk', emoji: '🍊', label: 'Tim Jeruk', bg: 'bg-orange-500' },
  { id: 'lele', emoji: '🐟', label: 'Tim Lele', bg: 'bg-cyan-500' },
  { id: 'recycle', emoji: '♻️', label: 'Tim Daur Ulang', bg: 'bg-green-600' },
  { id: 'kompos', emoji: '🌱', label: 'Tim Tunas', bg: 'bg-teal-500' },
  { id: 'pangan', emoji: '🌾', label: 'Tim Padi', bg: 'bg-yellow-500' },
];

interface AvatarIconProps {
  emoji: string;
  colorClass?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const AvatarIcon = ({ emoji, colorClass = 'bg-amber-500', size = 'md' }: AvatarIconProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
    xl: 'w-20 h-20 text-4xl',
  }[size];

  return (
    <div className={`${sizeClasses} ${colorClass} rounded-2xl flex items-center justify-center shadow-md border-2 border-white/60 select-none transform hover:scale-105 transition-transform`}>
      <span>{emoji}</span>
    </div>
  );
};
