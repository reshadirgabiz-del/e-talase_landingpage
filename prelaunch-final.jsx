// Pre-launch final app — same responsive token system as final-app.jsx,
// but mounts <PrelaunchApp> (no stats, no testimonials, waitlist-first).

const PL_FINAL_RESPONSIVE_CSS = `
:root {
  --hi-paper:   #f4ede0;
  --hi-card:    #fbf6ec;
  --hi-chrome:  #efe7d6;
  --hi-ink:     #1c1a14;
  --hi-muted:   #6e6757;
  --hi-line:    rgba(28,26,20,0.12);
  --accent:     #5d6b40;
  --accent-on:  #f4ede0;
  --c-sage:     #5d6b40;
  --c-terra:    #b65a30;
  --c-butter:   #e8b85a;
  --c-rose:     #c97e6e;
  --hi-serif:   Instrument Serif, ui-serif, Georgia, serif;
  --hi-sans:    Geist, ui-sans-serif, system-ui, sans-serif;
}

.jl-final {
  --gutter:            64px;
  --nav-py:            18px;
  --section-py:        100px;
  --section-py-sm:     56px;
  --section-rule-pad:  0px;
  --head-mb:           56px;
  --hero-bubble-gap:   48px;
  --h1:                88px;
  --h2:                56px;
  --h3:                32px;
  --h4:                22px;
  --lead:              18px;
  --body:              15px;
  --bubble-py:         11px;
  --bubble-px:         16px;
  --h1-mt:             24px;
  --h1-mb:             28px;
  --cta-mt:            36px;
  --hero-mock-mt:      96px;
  --hero-mock-max:     960px;
  --hero-mock-h:       480px;
  --feature-gap:       96px;
  --feature-cols:      1.05fr 1fr;
  --feature-col-gap:   60px;
  --feature-mock-h:    360px;
  --feature-pad:       48px;
  --compare-cols:      1fr 1fr;
  --compare-pad:       32px;
}

@media (max-width: 1099px) {
  .jl-final {
    --gutter:            40px;
    --section-py:        72px;
    --section-py-sm:     40px;
    --head-mb:           40px;
    --hero-bubble-gap:   36px;
    --h1:                64px;
    --h2:                44px;
    --h3:                28px;
    --hero-mock-mt:      72px;
    --hero-mock-max:     100%;
    --hero-mock-h:       420px;
    --feature-gap:       72px;
    --feature-cols:      1fr 1fr;
    --feature-col-gap:   36px;
    --feature-mock-h:    320px;
    --feature-pad:       32px;
  }
  .jl-chip { transform: scale(0.82) !important; }
}

@media (max-width: 720px) {
  .jl-final {
    --gutter:            20px;
    --nav-py:            14px;
    --section-py:        56px;
    --section-py-sm:     28px;
    --head-mb:           28px;
    --hero-bubble-gap:   32px;
    --h1:                40px;
    --h2:                30px;
    --h3:                24px;
    --h4:                20px;
    --lead:              15px;
    --body:              14px;
    --h1-mt:             16px;
    --h1-mb:             18px;
    --cta-mt:            24px;
    --hero-mock-mt:      48px;
    --hero-mock-h:       300px;
    --feature-gap:       48px;
    --feature-cols:      1fr;
    --feature-col-gap:   20px;
    --feature-mock-h:    260px;
    --feature-pad:       20px;
    --compare-cols:      1fr;
    --compare-pad:       20px;
  }
  .hi-nav-items > span:not(:last-child) {
    display: none;
  }
  .pl-nav-badge { display: none !important; }
  .jl-chip { display: none !important; }
  .jl-orbit { animation: none !important; }
}

body { margin: 0; background: var(--hi-paper); color: var(--hi-ink); font-family: var(--hi-sans); }
.jl-final { overflow-x: clip; }
html { scroll-behavior: smooth; }
`;

function PrelaunchShell({ children }) {
  return (
    <div className="jl-final" style={{ minHeight: '100vh', background: 'var(--hi-paper)' }}>
      <style>{PL_FINAL_RESPONSIVE_CSS}</style>
      {children}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrelaunchShell>
    <PrelaunchApp />
  </PrelaunchShell>
);
