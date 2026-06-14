export function SSLogo({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const w = Math.round(size * (120 / 134));
  return (
    <svg
      viewBox="0 0 120 134"
      width={w}
      height={size}
      aria-label="Sri Sahasra Enterprises"
      className={className}
    >
      <defs>
        <linearGradient id="ss-logo-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F08080" />
          <stop offset="50%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#8B0018" />
        </linearGradient>
      </defs>

      {/* Large S — upper left */}
      <text
        x="3"
        y="88"
        fontSize="90"
        fontFamily="var(--font-playfair), Playfair Display, Georgia, serif"
        fontWeight="700"
        fill="url(#ss-logo-red)"
      >
        S
      </text>

      {/* Diagonal slash */}
      <line
        x1="72"
        y1="6"
        x2="48"
        y2="108"
        stroke="url(#ss-logo-red)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Small S — lower right */}
      <text
        x="57"
        y="108"
        fontSize="62"
        fontFamily="var(--font-playfair), Playfair Display, Georgia, serif"
        fontWeight="700"
        fill="url(#ss-logo-red)"
      >
        S
      </text>

      {/* SRI SAHASRA — spaced caps below */}
      <text
        x="60"
        y="127"
        fontSize="9"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontWeight="400"
        letterSpacing="4.5"
        textAnchor="middle"
        fill="url(#ss-logo-red)"
        opacity="0.7"
      >
        SRI SAHASRA
      </text>
    </svg>
  );
}

export function SSLogoMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  const w = Math.round(size * (88 / 98));
  return (
    <svg
      viewBox="0 0 88 98"
      width={w}
      height={size}
      aria-label="SS"
      className={className}
    >
      <defs>
        <linearGradient id="ss-mark-red" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F08080" />
          <stop offset="50%" stopColor="#C41E3A" />
          <stop offset="100%" stopColor="#8B0018" />
        </linearGradient>
      </defs>

      {/* Large S — upper left */}
      <text
        x="2"
        y="72"
        fontSize="76"
        fontFamily="var(--font-playfair), Playfair Display, Georgia, serif"
        fontWeight="700"
        fill="url(#ss-mark-red)"
      >
        S
      </text>

      {/* Diagonal slash */}
      <line
        x1="60"
        y1="5"
        x2="40"
        y2="92"
        stroke="url(#ss-mark-red)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Small S — lower right */}
      <text
        x="47"
        y="92"
        fontSize="52"
        fontFamily="var(--font-playfair), Playfair Display, Georgia, serif"
        fontWeight="700"
        fill="url(#ss-mark-red)"
      >
        S
      </text>
    </svg>
  );
}
