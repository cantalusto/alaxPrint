export default function Logo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="alax-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF8A47" />
          <stop offset="1" stopColor="#E14A00" />
        </linearGradient>
      </defs>
      <path d="M32 6 L58 56 L40 56 L32 38 L24 56 L6 56 Z" fill="url(#alax-g)" />
      <path d="M32 22 L42 44 L22 44 Z" fill="#06080F" />
    </svg>
  );
}
