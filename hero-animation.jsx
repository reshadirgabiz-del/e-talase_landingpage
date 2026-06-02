// Animated hero stage — 3D perspective + floating product chips
// Wraps the storefront browser, adds slow orbit + parallax chips at varied Z-depths.

const HERO_ANIM_CSS = `
@keyframes jl-orbit {
  0%, 100% { transform: rotateY(-3.5deg) rotateX(2deg); }
  50%      { transform: rotateY(3.5deg) rotateX(-1.5deg); }
}
@keyframes jl-float-a {
  0%, 100% { transform: translate3d(0, 0, var(--z, 60px)) rotate(var(--r, -4deg)); }
  50%      { transform: translate3d(0, -14px, var(--z, 60px)) rotate(calc(var(--r, -4deg) + 1.4deg)); }
}
@keyframes jl-float-b {
  0%, 100% { transform: translate3d(0, 0, var(--z, 80px)) rotate(var(--r, 5deg)); }
  50%      { transform: translate3d(0, -18px, var(--z, 80px)) rotate(calc(var(--r, 5deg) - 1.6deg)); }
}
@keyframes jl-float-c {
  0%, 100% { transform: translate3d(0, 0, var(--z, 100px)) rotate(var(--r, -3deg)); }
  50%      { transform: translate3d(0, -10px, var(--z, 100px)) rotate(calc(var(--r, -3deg) + 1.2deg)); }
}
@keyframes jl-float-d {
  0%, 100% { transform: translate3d(0, 0, var(--z, 70px)) rotate(var(--r, 4deg)); }
  50%      { transform: translate3d(0, -16px, var(--z, 70px)) rotate(calc(var(--r, 4deg) - 1.3deg)); }
}
@keyframes jl-toast-in {
  0%       { transform: translateY(28px); opacity: 0; }
  8%, 80%  { transform: translateY(0);    opacity: 1; }
  100%     { transform: translateY(-10px); opacity: 0; }
}
@keyframes jl-cart-pop {
  0%   { transform: scale(1); }
  40%  { transform: scale(1.4); color: var(--c-butter); }
  100% { transform: scale(1); }
}
@keyframes jl-dot-pulse {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in oklch, var(--accent) 40%, transparent); }
  50%      { box-shadow: 0 0 0 8px color-mix(in oklch, var(--accent) 0%, transparent); }
}
@keyframes jl-bubble-in {
  0%   { opacity: 0; transform: translateY(10px) scale(0.96); }
  60%  { opacity: 1; transform: translateY(0) scale(1.02); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes jl-typing-dot {
  0%, 60%, 100% { opacity: 0.35; transform: translateY(0); }
  30%           { opacity: 1;    transform: translateY(-3px); }
}
@media (prefers-reduced-motion: reduce) {
  .jl-orbit, .jl-chip { animation: none !important; }
}
`;

function FloatingChip({ color, label, sub, pos, z, rotate, anim }) {
  return (
    <div
      className="jl-chip"
      style={{
        position: 'absolute',
        ...pos,
        width: 132,
        background: 'var(--hi-card)',
        border: '1px solid var(--hi-line)',
        borderRadius: 12,
        padding: 10,
        boxShadow: '0 18px 36px -16px rgba(28,26,20,0.32), 0 4px 8px -4px rgba(28,26,20,0.18)',
        animation: `${anim} 7s ease-in-out infinite`,
        '--z': `${z}px`,
        '--r': `${rotate}deg`,
        transform: `translate3d(0,0,${z}px) rotate(${rotate}deg)`,
        zIndex: 2,
        pointerEvents: 'none',
      }}
    >
      <div style={{
        height: 52,
        background: `color-mix(in oklch, ${color} 36%, var(--hi-paper))`,
        borderRadius: 8,
        marginBottom: 8,
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 6, left: 6,
          padding: '2px 6px',
          borderRadius: 999,
          background: 'var(--hi-ink)',
          color: 'var(--hi-paper)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 8,
          letterSpacing: '0.06em',
        }}>{sub}</div>
      </div>
      <div style={{
        fontFamily: 'var(--hi-sans)',
        fontSize: 11,
        color: 'var(--hi-ink)',
        marginBottom: 2,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}>{label}</div>
      <div style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: 9,
        color: color,
        fontWeight: 600,
      }}>● {color === 'var(--c-rose)' ? 'BARU' : color === 'var(--c-sage)' ? 'LARIS' : color === 'var(--c-butter)' ? 'PROMO' : 'STOK 3'}</div>
    </div>
  );
}

function HeroStage({ children }) {
  return (
    <div style={{
      position: 'relative',
      perspective: '1600px',
      transformStyle: 'preserve-3d',
    }}>
      <style>{HERO_ANIM_CSS}</style>

      {/* Chips behind / around the browser */}
      <FloatingChip
        color="var(--c-rose)"   label="Hijab voal · Mocca"
        sub="BARU"
        pos={{ top: '-40px', left: '-60px' }}
        z={70} rotate={-6} anim="jl-float-a"
      />
      <FloatingChip
        color="var(--c-sage)"   label="Outer linen · Sage"
        sub="LARIS"
        pos={{ top: '-30px', right: '-70px' }}
        z={90} rotate={5} anim="jl-float-b"
      />
      <FloatingChip
        color="var(--c-butter)" label="Bros mini · Pearl"
        sub="PROMO"
        pos={{ bottom: '-50px', left: '40px' }}
        z={110} rotate={-3} anim="jl-float-c"
      />
      <FloatingChip
        color="var(--c-terra)"  label="Tas anyam · Beige"
        sub="STOK 3"
        pos={{ bottom: '-40px', right: '60px' }}
        z={80} rotate={4} anim="jl-float-d"
      />

      {/* The browser with slow 3D orbit */}
      <div
        className="jl-orbit"
        style={{
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'jl-orbit 14s ease-in-out infinite',
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { HeroStage, FloatingChip });
