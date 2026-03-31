export default function Azure() {
  return (
    <svg viewBox="0 0 128 128">
      <defs>
        <linearGradient id="azure-a" x1="0.561" y1="0.068" x2="0.327" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#114a8b" />
          <stop offset="1" stopColor="#0669bc" />
        </linearGradient>
        <linearGradient id="azure-b" x1="0.5" y1="0" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0" stopColor="#3ccbf4" />
          <stop offset="1" stopColor="#2892df" />
        </linearGradient>
      </defs>
      <path
        d="M46.09 6.844L22.368 68.656l33.04 6.126L75.636 43.6l-29.547 7.148z"
        fill="url(#azure-a)"
      />
      <path
        d="M50.336 8.87L32.728 59.048l-14.98 38.094 28.342-5.115 41.576-7.414-19.416-38.6z"
        fill="#0078d4"
      />
      <path
        d="M75.636 43.6l-10.48 26.55-26.186 14.883 41.576-7.414L121 96.19z"
        fill="url(#azure-b)"
      />
    </svg>
  );
}
