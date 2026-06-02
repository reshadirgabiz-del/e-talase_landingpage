// Hi-fi mockup primitives — storefront / orders / stock for Jastip Live
// All inherit --accent / --hi-ink / --hi-paper from the artboard scope, but
// per-mockup we also pull in --c-sage / --c-terra / --c-butter / --c-rose
// to layer in color.

function FauxBrowser({ url = 'tokokamu.e-talase.com', children, height, style = {} }) {
  return (
    <div style={{
      border: '1px solid var(--hi-line)',
      borderRadius: 12,
      background: 'var(--hi-card)',
      overflow: 'hidden',
      boxShadow: '0 24px 60px -28px rgba(28,26,20,0.35)',
      height,
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 14px',
        borderBottom: '1px solid var(--hi-line)',
        background: 'var(--hi-chrome)',
        flex: 'none',
      }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: '#e0a0a0' }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: '#e0c98a' }} />
          <span style={{ width: 10, height: 10, borderRadius: 999, background: '#a8c594' }} />
        </div>
        <div style={{
          flex: 1, height: 22, borderRadius: 6,
          background: 'var(--hi-paper)', border: '1px solid var(--hi-line)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          color: 'var(--hi-muted)',
        }}>{url}</div>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

// ── Product tile (used in storefront mocks) ──
function ProductTile({ name, price, tint, sticker, sold }) {
  return (
    <div style={{
      background: 'var(--hi-card)',
      border: '1px solid var(--hi-line)',
      borderRadius: 10,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{
        height: 92,
        background: tint,
        position: 'relative',
      }}>
        {sticker && (
          <div style={{
            position: 'absolute', top: 8, left: 8,
            padding: '3px 8px',
            background: 'var(--hi-ink)',
            color: 'var(--hi-paper)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 9,
            borderRadius: 999,
            letterSpacing: '0.06em',
          }}>{sticker}</div>
        )}
        {sold && (
          <div style={{
            position: 'absolute', bottom: 8, right: 8,
            padding: '3px 8px',
            background: 'rgba(28,26,20,0.78)',
            color: '#fff',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 9,
            borderRadius: 999,
          }}>{sold}</div>
        )}
      </div>
      <div style={{ padding: '8px 10px' }}>
        <div style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 11,
          color: 'var(--hi-ink)',
          marginBottom: 3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>{name}</div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          color: 'var(--hi-muted)',
        }}>{price}</div>
      </div>
    </div>
  );
}

// ── Hero: full storefront preview (Toko Sebelah-style editorial) ──
// Minimalist, huge sans-caps title, eyebrow, pill CTA, glimpse of product grid.
// Keeps the live "new order" toast + cart badge animation from before.
function MockHeroStorefront({ animated = false, storeName = 'TOKO RINA' }) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    if (!animated) return;
    const id = setInterval(() => setTick((t) => t + 1), 5200);
    return () => clearInterval(id);
  }, [animated]);

  const newOrders = [
    { name: 'Rina P.',  item: 'Hijab voal · Mocca',  price: 'Rp 78.000',  c: 'var(--c-rose)' },
    { name: 'Dewi K.',  item: 'Outer linen · Sage',  price: 'Rp 145.000', c: 'var(--c-sage)' },
    { name: 'Sari M.',  item: 'Tas anyam · Beige',   price: 'Rp 320.000', c: 'var(--c-terra)' },
    { name: 'Bunga A.', item: 'Bros mini · Pearl',   price: 'Rp 36.000',  c: 'var(--c-butter)' },
  ];
  const current = newOrders[tick % newOrders.length];
  const cartCount = 6 + (tick % 5);

  return (
    <div style={{
      height: '100%',
      background: 'var(--hi-card)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top bar — wordmark left, account icons right */}
      <div style={{
        padding: '14px 22px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 13,
          letterSpacing: '0.22em',
          color: 'var(--hi-ink)',
          fontWeight: 400,
          whiteSpace: 'nowrap',
        }}>{storeName}</span>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {/* shipping icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--hi-muted)' }}>
            <path d="M3 7h13v10H3z" /><path d="M16 10h4l1 3v4h-5" />
            <circle cx="6.5" cy="17.5" r="1.5" /><circle cx="17.5" cy="17.5" r="1.5" />
          </svg>
          {/* account icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--hi-muted)' }}>
            <circle cx="12" cy="8" r="3.5" /><path d="M5 20c1-3.5 4-5.5 7-5.5s6 2 7 5.5" />
          </svg>
          {/* cart icon with badge */}
          <div style={{ position: 'relative' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: 'var(--hi-muted)' }}>
              <path d="M4 5h2l2 12h10l2-9H7" /><circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" />
            </svg>
            <span key={tick} style={{
              position: 'absolute',
              top: -7, right: -8,
              minWidth: 16, height: 16, padding: '0 4px',
              borderRadius: 999,
              background: 'var(--hi-ink)',
              color: 'var(--hi-paper)',
              fontFamily: 'var(--hi-sans)',
              fontSize: 9, fontWeight: 600,
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              animation: animated ? 'jl-cart-pop 0.6s ease-out' : 'none',
            }}>{cartCount}</span>
          </div>
        </div>
      </div>

      {/* Centered hero block */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 20px',
        gap: 18,
      }}>
        <div style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 10,
          letterSpacing: '0.32em',
          color: 'var(--hi-muted)',
          fontWeight: 400,
          whiteSpace: 'nowrap',
        }}>POWERED BY E-TALASE</div>

        <div className="mh-title" style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 'clamp(28px, 6vw, 60px)',
          letterSpacing: '0.16em',
          color: 'var(--hi-ink)',
          fontWeight: 400,
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}>{storeName}</div>

        <button style={{
          marginTop: 6,
          padding: '12px 26px 12px 30px',
          borderRadius: 999,
          background: 'transparent',
          border: '1px solid var(--hi-ink)',
          color: 'var(--hi-ink)',
          fontFamily: 'var(--hi-sans)',
          fontSize: 10,
          letterSpacing: '0.22em',
          fontWeight: 500,
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          whiteSpace: 'nowrap',
        }}>
          LIHAT PRODUK
          <span style={{ fontSize: 11, opacity: 0.7 }}>⌄</span>
        </button>
      </div>

      {/* Footer band: divider + product count + glimpse of grid */}
      <div style={{
        borderTop: '1px solid var(--hi-line)',
        padding: '10px 22px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}>
        <span style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 10,
          letterSpacing: '0.22em',
          color: 'var(--hi-muted)',
        }}>4 PRODUK</span>
        <span style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 10,
          letterSpacing: '0.22em',
          color: 'var(--hi-muted)',
        }}>SUSUN ⌄</span>
      </div>

      {/* Product grid strip (just the tops — hints at more below) */}
      <div style={{
        padding: '14px 22px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 12,
        marginBottom: -40,
      }}>
        {[
          { tint: 'var(--c-rose)',   label: 'BARU' },
          { tint: 'var(--c-sage)',   label: 'LARIS' },
          { tint: 'var(--c-butter)', label: null },
          { tint: 'var(--c-terra)',  label: '−25%' },
        ].map((p, i) => (
          <div key={i} style={{
            aspectRatio: '1 / 1',
            background: `color-mix(in oklch, ${p.tint} 35%, var(--hi-paper))`,
            border: '1px solid var(--hi-line)',
            position: 'relative',
          }}>
            {p.label && (
              <span style={{
                position: 'absolute', top: 6, left: 6,
                padding: '2px 7px',
                background: 'var(--hi-ink)',
                color: 'var(--hi-paper)',
                fontFamily: 'var(--hi-sans)',
                fontSize: 8, letterSpacing: '0.14em',
              }}>{p.label}</span>
            )}
          </div>
        ))}
      </div>

      {/* Live new-order toast */}
      {animated && (
        <div
          key={tick}
          style={{
            position: 'absolute',
            left: 16, bottom: 16,
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px',
            background: 'var(--hi-ink)',
            color: 'var(--hi-paper)',
            borderRadius: 12,
            boxShadow: '0 12px 28px -10px rgba(28,26,20,0.45)',
            animation: 'jl-toast-in 5s ease-out forwards',
            zIndex: 4,
            maxWidth: 280,
          }}
        >
          <span style={{
            width: 8, height: 8, borderRadius: 999,
            background: current.c,
            boxShadow: `0 0 0 4px color-mix(in oklch, ${current.c} 30%, transparent)`,
          }} />
          <div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
              opacity: 0.7, letterSpacing: '0.08em',
            }}>PESANAN BARU · {current.name.toUpperCase()}</div>
            <div style={{
              fontFamily: 'var(--hi-sans)', fontSize: 12, marginTop: 2,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span>{current.item}</span>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                color: 'var(--c-butter)',
              }}>{current.price}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Feature 01: storefront editor (drag-drop builder) ──
function MockStorefrontEditor() {
  return (
    <div style={{
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '140px 1fr',
      background: 'var(--hi-paper)',
    }}>
      {/* Left rail */}
      <div style={{
        background: 'var(--hi-card)',
        borderRight: '1px solid var(--hi-line)',
        padding: 12,
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          color: 'var(--hi-muted)', letterSpacing: '0.1em',
          marginBottom: 6,
        }}>BLOK</div>
        {[
          ['Banner', 'var(--c-butter)'],
          ['Produk grid', 'var(--c-sage)'],
          ['Promo strip', 'var(--c-terra)'],
          ['Testimoni', 'var(--c-rose)'],
          ['Kategori', 'var(--accent)'],
        ].map(([label, color], i) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '6px 8px',
            background: i === 1 ? 'var(--hi-paper)' : 'transparent',
            border: i === 1 ? '1px solid var(--hi-line)' : '1px solid transparent',
            borderRadius: 6,
            fontFamily: 'var(--hi-sans)', fontSize: 11,
            color: 'var(--hi-ink)',
          }}>
            <span style={{ width: 6, height: 16, background: color, borderRadius: 2 }} />
            {label}
          </div>
        ))}
      </div>
      {/* Canvas */}
      <div style={{ padding: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{
          background: 'var(--c-butter)',
          padding: 10,
          borderRadius: 8,
          border: '1px dashed var(--hi-ink)',
          fontFamily: 'var(--hi-serif)', fontSize: 13,
          color: 'var(--hi-ink)',
        }}>
          Promo Lebaran · diskon 25%
        </div>
        <div style={{
          padding: 10,
          border: '1.5px solid var(--c-sage)',
          background: 'color-mix(in oklch, var(--c-sage) 8%, var(--hi-paper))',
          borderRadius: 8,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -8, left: 10,
            background: 'var(--c-sage)', color: 'var(--hi-paper)',
            padding: '2px 8px', borderRadius: 999,
            fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
          }}>● TERPILIH</div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginTop: 4,
          }}>
            {['var(--c-rose)','var(--c-sage)','var(--c-butter)','var(--c-terra)'].map((c, i) => (
              <div key={i} style={{
                height: 44, borderRadius: 6,
                background: `color-mix(in oklch, ${c} 30%, var(--hi-paper))`,
                border: '1px solid var(--hi-line)',
              }} />
            ))}
          </div>
        </div>
        <div style={{
          padding: 10,
          background: 'var(--hi-card)',
          borderRadius: 8,
          border: '1px solid var(--hi-line)',
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--hi-sans)', fontSize: 11, color: 'var(--hi-muted)',
        }}>
          <span>Testimoni</span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10 }}>+ TAMBAH</span>
        </div>
      </div>
    </div>
  );
}

// ── Feature 02: Order management ──
function MockOrderManagement() {
  const orders = [
    { id: '#1147', name: 'Rina P.',     items: 3, price: 'Rp 274.000', status: 'baru',  ch: 'IG' },
    { id: '#1146', name: 'Dewi K.',     items: 1, price: 'Rp 145.000', status: 'bayar', ch: 'WA' },
    { id: '#1145', name: 'Sari M.',     items: 2, price: 'Rp 98.000',  status: 'baru',  ch: 'TT' },
    { id: '#1144', name: 'Bunga A.',    items: 5, price: 'Rp 412.000', status: 'kirim', ch: 'WA' },
    { id: '#1143', name: 'Putri W.',    items: 1, price: 'Rp 56.000',  status: 'selesai', ch: 'IG' },
  ];
  const statusStyle = {
    baru:    { bg: 'color-mix(in oklch, var(--c-sage) 22%, var(--hi-paper))', fg: 'var(--c-sage)' },
    bayar:   { bg: 'color-mix(in oklch, var(--c-butter) 35%, var(--hi-paper))', fg: '#6e5a18' },
    kirim:   { bg: 'color-mix(in oklch, var(--c-terra) 22%, var(--hi-paper))', fg: 'var(--c-terra)' },
    selesai: { bg: 'color-mix(in oklch, var(--hi-muted) 15%, var(--hi-paper))', fg: 'var(--hi-muted)' },
  };
  const channelColor = {
    WA: 'var(--c-sage)',
    IG: 'var(--c-rose)',
    TT: 'var(--hi-ink)',
  };
  return (
    <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--hi-paper)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontFamily: 'var(--hi-serif)', fontSize: 18, color: 'var(--hi-ink)', whiteSpace: 'nowrap' }}>
          Pesanan
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {[['Semua','38'], ['Baru','12'], ['Bayar','9'], ['Kirim','17']].map(([t, n], i) => (
            <span key={t} style={{
              padding: '4px 10px',
              borderRadius: 999,
              fontFamily: 'var(--hi-sans)', fontSize: 11,
              background: i === 1 ? 'var(--c-sage)' : 'transparent',
              color: i === 1 ? 'var(--hi-paper)' : 'var(--hi-ink)',
              border: i === 1 ? 'none' : '1px solid var(--hi-line)',
              display: 'flex', alignItems: 'center', gap: 4,
            }}>
              {t} <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
                opacity: 0.7,
              }}>{n}</span>
            </span>
          ))}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 8,
      }}>
        {[
          { l: 'Hari ini',   v: 'Rp 4.2jt', c: 'var(--c-sage)' },
          { l: 'Belum dibayar', v: '9',     c: 'var(--c-butter)' },
          { l: 'Siap kirim', v: '17',       c: 'var(--c-terra)' },
        ].map((s, i) => (
          <div key={i} style={{
            padding: '8px 12px',
            background: `color-mix(in oklch, ${s.c} 14%, var(--hi-paper))`,
            border: `1px solid color-mix(in oklch, ${s.c} 30%, var(--hi-line))`,
            borderRadius: 8,
          }}>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
              color: 'var(--hi-muted)', letterSpacing: '0.04em',
            }}>{s.l.toUpperCase()}</div>
            <div style={{
              fontFamily: 'var(--hi-serif)', fontSize: 18, color: 'var(--hi-ink)',
            }}>{s.v}</div>
          </div>
        ))}
      </div>

      <div style={{
        flex: 1, overflow: 'hidden',
        border: '1px solid var(--hi-line)', borderRadius: 8,
        background: 'var(--hi-card)',
      }}>
        {orders.map((o, i) => {
          const s = statusStyle[o.status];
          return (
            <div key={o.id} style={{
              display: 'grid',
              gridTemplateColumns: '54px 1fr 30px 70px 84px',
              gap: 10,
              alignItems: 'center',
              padding: '10px 12px',
              borderBottom: i < orders.length - 1 ? '1px solid var(--hi-line)' : 'none',
              fontFamily: 'var(--hi-sans)',
              fontSize: 12,
              color: 'var(--hi-ink)',
            }}>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--hi-muted)' }}>{o.id}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 18, height: 18, borderRadius: 999,
                  background: channelColor[o.ch], color: '#fff',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 8,
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700,
                }}>{o.ch}</span>
                <span style={{ whiteSpace: 'nowrap' }}>{o.name}</span>
              </div>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: 'var(--hi-muted)', textAlign: 'right' }}>×{o.items}</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textAlign: 'right' }}>{o.price}</span>
              <span style={{
                padding: '3px 8px', borderRadius: 999,
                background: s.bg, color: s.fg,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
                textAlign: 'center', letterSpacing: '0.06em',
              }}>{o.status.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Feature 03: Stock / inventory ──
function MockStockManager() {
  const items = [
    { name: 'Hijab voal · Mocca',   sku: 'HJ-VL-M', stock: 24, low: 0,  tint: 'var(--c-rose)' },
    { name: 'Hijab voal · Sage',    sku: 'HJ-VL-S', stock: 3,  low: 1,  tint: 'var(--c-sage)' },
    { name: 'Outer linen · Putih',  sku: 'OT-LN-W', stock: 12, low: 0,  tint: 'var(--c-butter)' },
    { name: 'Bros mini · Pearl',    sku: 'BR-MN-P', stock: 0,  low: 2,  tint: 'var(--c-rose)' },
    { name: 'Tas anyam · Beige',    sku: 'TS-AN-B', stock: 7,  low: 0,  tint: 'var(--c-terra)' },
  ];
  return (
    <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--hi-paper)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontFamily: 'var(--hi-serif)', fontSize: 18, color: 'var(--hi-ink)', whiteSpace: 'nowrap' }}>
          Stok produk
        </div>
        <div style={{
          padding: '4px 10px', borderRadius: 999,
          background: 'color-mix(in oklch, var(--c-terra) 18%, var(--hi-paper))',
          color: 'var(--c-terra)',
          fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
          display: 'inline-flex', alignItems: 'center', gap: 5,
          whiteSpace: 'nowrap',
        }}>
          <span style={{ width: 5, height: 5, borderRadius: 999, background: 'var(--c-terra)' }} />
          2 STOK MENIPIS
        </div>
      </div>

      {/* Sparkline-ish summary bar */}
      <div style={{
        padding: '12px 14px',
        background: 'var(--hi-card)',
        border: '1px solid var(--hi-line)',
        borderRadius: 8,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 12,
      }}>
        {[
          { l: 'Total SKU', v: '48',    c: 'var(--c-sage)' },
          { l: 'Menipis',   v: '2',     c: 'var(--c-butter)' },
          { l: 'Habis',     v: '1',     c: 'var(--c-terra)' },
        ].map((s, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'baseline', gap: 8,
            borderLeft: i > 0 ? '1px solid var(--hi-line)' : 'none',
            paddingLeft: i > 0 ? 12 : 0,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: s.c }} />
            <div>
              <div style={{ fontFamily: 'var(--hi-serif)', fontSize: 20, color: 'var(--hi-ink)' }}>{s.v}</div>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--hi-muted)' }}>{s.l.toUpperCase()}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        flex: 1, overflow: 'hidden',
        border: '1px solid var(--hi-line)', borderRadius: 8,
        background: 'var(--hi-card)',
      }}>
        {items.map((it, i) => {
          const habis = it.stock === 0;
          const tipis = !habis && it.stock < 5;
          const tagBg = habis
            ? 'color-mix(in oklch, var(--c-terra) 22%, var(--hi-paper))'
            : tipis
              ? 'color-mix(in oklch, var(--c-butter) 35%, var(--hi-paper))'
              : 'color-mix(in oklch, var(--c-sage) 18%, var(--hi-paper))';
          const tagFg = habis
            ? 'var(--c-terra)'
            : tipis
              ? '#6e5a18'
              : 'var(--c-sage)';
          const tagLabel = habis ? 'HABIS' : tipis ? `${it.stock} TIPIS` : `${it.stock} READY`;
          return (
            <div key={it.sku} style={{
              display: 'grid',
              gridTemplateColumns: '32px 1fr 70px 80px',
              gap: 10,
              alignItems: 'center',
              padding: '10px 12px',
              borderBottom: i < items.length - 1 ? '1px solid var(--hi-line)' : 'none',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: `color-mix(in oklch, ${it.tint} 32%, var(--hi-paper))`,
                border: '1px solid var(--hi-line)',
              }} />
              <div>
                <div style={{ fontFamily: 'var(--hi-sans)', fontSize: 12, color: 'var(--hi-ink)' }}>{it.name}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: 'var(--hi-muted)' }}>{it.sku}</div>
              </div>
              <span style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
                color: 'var(--hi-muted)', textAlign: 'right',
              }}>
                {it.low > 0 ? `↓ ${it.low} min` : '—'}
              </span>
              <span style={{
                padding: '3px 8px', borderRadius: 999,
                background: tagBg, color: tagFg,
                fontFamily: 'JetBrains Mono, monospace', fontSize: 9,
                textAlign: 'center', letterSpacing: '0.06em',
              }}>{tagLabel}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

Object.assign(window, {
  FauxBrowser,
  MockHeroStorefront,
  MockStorefrontEditor,
  MockOrderManagement,
  MockStockManager,
});
