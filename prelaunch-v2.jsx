// Pre-launch landing — value-first, no statistics, no testimonials.
// Same editorial cream + serif system as the main site (wireframe-hifi.jsx)
// but with sections reshaped for a product that hasn't shipped yet:
//  - Hero with waitlist form instead of "buka toko saya"
//  - Founder's note (why we're building this)
//  - Early-access perks (what waitlist gets)
//  - Roadmap (what's coming, when)
//  - Comparison (kept — pure value proposition)
//  - Footer with second waitlist form

const PL_CONTENT = {
  brand: 'e-talase',
  nav: ['Masalah', 'Fitur', 'Bandingkan', 'Roadmap'],
  ctaWait: 'Daftar sekarang',
  hero: {
    badge: 'TOKO SENDIRI · SOFT LAUNCH 2026',
    headline1: 'Toko kamu,',
    headline2: 'aturan kamu.',
    sub: 'Punya toko online sendiri — bukan cuma lapak di marketplace. Server, domain, dan urusan teknisnya kami yang tangani. Kamu tinggal fokus jualan, dan bisa mulai hari ini juga.',
    cta: 'Daftar sekarang',
    micro: 'gratis bulan pertama · tanpa kartu kredit · cukup email kamu',
  },
  warmup: [
    { side: 'them', text: 'Jualan di marketplace, ramai ya?' },
    { side: 'me',   text: 'Ramai, tapi keuntungannya kepotong biaya terus.' },
    { side: 'them', text: 'Pengin punya toko sendiri, tapi mikirin server dan domain?' },
    { side: 'me',   text: 'Iya. Saya bukan orang teknis.' },
    { side: 'them', text: 'Itu alasan kami bikin e-talase. Kamu yang jualan, teknisnya kami yang urus.' },
  ],
  problem: {
    kicker: 'Kenapa toko sendiri · 01',
    headline1: 'Omzet naik, tapi ',
    headlineEm: 'laba belum ikut naik.',
    sub: 'Ini bukan salah kamu. Marketplace memang jago mengumpulkan keramaian — tapi ada titik di mana bisnis butuh kanal yang benar-benar kamu miliki sendiri.',
    pains: [
      {
        tag: '1',
        title: 'Margin terpotong',
        desc: 'Biaya admin naik terus. Belum lagi harus ikut flash sale dan subsidi promo biar produk tetap kelihatan.',
        color: 'rose',
      },
      {
        tag: '2',
        title: 'Perang harga',
        desc: 'Calon pembeli bisa membandingkan harga dengan toko sebelah cuma dengan sekali klik.',
        color: 'terra',
      },
      {
        tag: '3',
        title: 'Data bukan milikmu',
        desc: 'Pelanggan datang dan pergi. Mau follow-up untuk repeat order? Susah — sering dibatasi platform.',
        color: 'butter',
      },
    ],
  },
  features: [
    {
      tag: '01',
      name: 'Toko siap pakai, tanpa kamu menyentuh urusan teknis.',
      desc: 'Server, domain, sertifikat, sampai update — semua kami yang tangani. Kamu cukup siapkan nama toko dan foto produk.',
      pain: 'Pengin punya toko sendiri, tapi urusan server dan maintenance bikin ragu sejak awal.',
      bullets: [
        'Toko online aktif hari ini juga, bukan tiga bulan lagi',
        'Tanpa perlu mikirin server, domain, atau maintenance',
        'Terima transfer bank langsung — tanpa biaya transaksi tambahan, pas untuk produk bernilai tinggi',
      ],
      mock: 'storefront',
      color: 'sage',
    },
    {
      tag: '02',
      name: 'Ubah obrolan jadi pesanan lewat order link.',
      desc: 'Dari obrolan di media sosial atau chat, buatkan keranjang belanja siap bayar — lengkap dengan item dan jumlah yang diminta pelanggan. Tinggal kirim link-nya.',
      pain: 'Pesanan masih dicatat manual dari berbagai chat, dan sering ada yang kelewat.',
      bullets: [
        'Order link berisi keranjang siap bayar sesuai item & jumlah yang diminta pelanggan',
        'Pasang kode voucher untuk promo maupun pelanggan setia',
        'Status dan resi terupdate otomatis, tanpa pengecekan manual',
      ],
      mock: 'orders',
      color: 'terra',
    },
    {
      tag: '03',
      name: 'Stok terupdate otomatis. Nggak ada lagi over-sell.',
      desc: 'Stok berkurang otomatis setiap ada pesanan. Ada peringatan dini saat SKU menipis, jadi kamu bisa restock sebelum kehabisan.',
      pain: 'Sering kejual barang yang ternyata stoknya sudah habis.',
      bullets: [
        'Stok berkurang otomatis setiap pesanan masuk',
        'Peringatan dini saat SKU mulai menipis',
        'Anti over-sell — pelanggan nggak kecewa',
      ],
      mock: 'stock',
      color: 'butter',
    },
  ],
  founder: {
    lines: [
      'Halo, saya Dirga, pendiri e-talase.',
      'Awalnya saya bikin ini untuk bantu istri saya, yang lagi cari alternatif dari marketplace dengan biaya yang mahal.',
      'Dari situ, e-talase berkembang: ada fitur untuk kerja bareng tim — misalnya mengelola produk bersama — plus cara mudah memindahkan percakapan dari media sosial ke platform lewat order link.',
      'Tujuannya sederhana: bikin jualan online terasa lebih ringan, dan keuntungannya benar-benar jadi milik kamu.',
    ],
    signoff: '— Dirga, pendiri e-talase',
  },
  perks: [
    {
      tag: 'A',
      title: 'Gratis bulan pertama',
      desc: 'Promo soft launch: paket Starter gratis 100% di bulan pertama. Mulai jualan tanpa biaya.',
      color: 'sage',
    },
    {
      tag: 'B',
      title: 'Diskon 50% setahun penuh',
      desc: 'Setelah bulan pertama, nikmati potongan 50% untuk paket Starter selama satu tahun penuh.',
      color: 'terra',
    },
    {
      tag: 'C',
      title: 'Dukungan langsung',
      desc: 'Kami siap bantu lewat call dan online meeting untuk proses setup dan dukungan sehari-hari.',
      color: 'butter',
    },
    {
      tag: 'D',
      title: 'Suaramu, fitur kami',
      desc: 'Kamu yang menentukan fitur mana yang diprioritaskan. Kami kembangkan, kamu coba, kami sempurnakan.',
      color: 'rose',
    },
  ],
  roadmap: [
    { q: 'Sekarang', label: 'Jun 2026',     state: 'now',   title: 'Soft launch',            desc: 'Paket Starter sudah bisa dipakai — gratis di bulan pertama, lalu diskon 50% untuk satu tahun penuh. Daftar sekarang untuk ikut.' },
    { q: 'Berikutnya', label: 'Jul–Agu 2026', state: 'next',  title: 'Rilis aplikasi mobile',  desc: 'Aplikasi mobile e-talase hadir, biar kamu bisa kelola toko langsung dari ponsel.' },
    { q: 'Q4 2026', label: 'Okt 2026',     state: 'soon',  title: 'Open beta',              desc: 'Kami buka pintu lebih lebar untuk lebih banyak merchant.' },
    { q: 'Q1 2027', label: 'Jan 2027',     state: 'later', title: 'Public launch',          desc: 'e-talase resmi terbuka untuk umum, lengkap dengan fitur-fitur terbaru.' },
  ],
  comparison: {
    rows: [
      { label: 'Biaya bulanan',   a: 'Biaya + iklan, terasa pelan-pelan', b: 'Jutaan untuk developer & server', c: 'Hemat — gratis bulan pertama' },
      { label: 'Margin laba',     a: 'Terpotong biaya & promo',           b: 'Utuh',                             c: 'Utuh, masuk ke kantong sendiri' },
      { label: 'Data pelanggan',  a: 'Terbatas, bukan milikmu',           b: 'Milikmu',                          c: '100% milikmu' },
      { label: 'Waktu tayang',    a: 'Instan',                            b: '2 minggu – 3 bulan',               c: 'Hari ini juga' },
      { label: 'Butuh tim teknis', a: 'Nggak',                            b: 'Tinggi (developer + maintenance)', c: 'Nggak perlu' },
      { label: 'Ketergantungan',  a: 'Tinggi ke platform',                b: 'Nggak ada',                        c: 'Nggak ada' },
    ],
  },
};

// ─── Shared primitives (scoped to this file) ─────────────────────────────

function PlBubble({ side = 'them', children, style = {}, size = 14 }) {
  const them = side === 'them';
  return (
    <div style={{
      alignSelf: them ? 'flex-start' : 'flex-end',
      maxWidth: '82%',
      background: them ? 'var(--hi-card)' : 'var(--accent)',
      color: them ? 'var(--hi-ink)' : 'var(--accent-on)',
      border: them ? '1px solid var(--hi-line)' : 'none',
      borderRadius: them ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
      padding: 'var(--bubble-py) var(--bubble-px)',
      fontFamily: 'var(--hi-sans)',
      fontSize: size,
      lineHeight: 1.5,
      ...style,
    }}>
      {children}
    </div>
  );
}

function PlTypingDots({ side = 'them' }) {
  const them = side === 'them';
  return (
    <div style={{
      alignSelf: them ? 'flex-start' : 'flex-end',
      background: them ? 'var(--hi-card)' : 'var(--accent)',
      border: them ? '1px solid var(--hi-line)' : 'none',
      borderRadius: them ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
      padding: '12px 14px',
      display: 'inline-flex',
      gap: 5,
      animation: 'jl-bubble-in 0.3s ease-out',
    }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: 6, height: 6, borderRadius: 999,
          background: them ? 'var(--hi-muted)' : 'var(--accent-on)',
          opacity: 0.4,
          animation: `jl-typing-dot 1.1s ease-in-out ${i * 0.18}s infinite`,
        }} />
      ))}
    </div>
  );
}

function PlAnimatedChat({ messages, minHeight = 220 }) {
  const [state, setState] = React.useState({ visible: 0, typing: false });
  React.useEffect(() => {
    const mq = typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
    if (mq && mq.matches) { setState({ visible: messages.length, typing: false }); return; }
    let cancelled = false;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    (async function run() {
      while (!cancelled) {
        setState({ visible: 0, typing: false });
        await wait(700);
        if (cancelled) return;
        for (let i = 0; i < messages.length; i++) {
          const m = messages[i];
          if (m.side === 'them') {
            setState({ visible: i, typing: true });
            await wait(1100);
            if (cancelled) return;
          } else {
            await wait(500);
            if (cancelled) return;
          }
          setState({ visible: i + 1, typing: false });
          await wait(m.side === 'me' ? 1400 : 900);
          if (cancelled) return;
        }
        await wait(7000);
      }
    })();
    return () => { cancelled = true; };
  }, [messages]);
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 8,
      maxWidth: 460, margin: '0 auto var(--hero-bubble-gap)', minHeight,
    }}>
      {messages.slice(0, state.visible).map((m, i) => {
        const isNewest = i === state.visible - 1;
        return (
          <PlBubble key={i} side={m.side} style={isNewest ? { animation: 'jl-bubble-in 0.4s ease-out' } : {}}>
            {m.text}
          </PlBubble>
        );
      })}
      {state.typing && state.visible < messages.length && (
        <PlTypingDots side={messages[state.visible].side} />
      )}
    </div>
  );
}

function PlKicker({ children, style = {} }) {
  return (
    <div style={{
      fontFamily: 'JetBrains Mono, monospace',
      fontSize: 10,
      letterSpacing: '0.12em',
      color: 'var(--hi-muted)',
      textTransform: 'uppercase',
      ...style,
    }}>{children}</div>
  );
}

function plH2() {
  return {
    fontFamily: 'var(--hi-serif)',
    fontSize: 'var(--h2)',
    margin: '12px 0 0',
    color: 'var(--hi-ink)',
    letterSpacing: '-0.02em',
    fontWeight: 400,
    lineHeight: 1.05,
  };
}

// ─── Waitlist form (inline, used in hero & footer) ────────────────────────

function WaitlistForm({ variant = 'light', cta = 'Daftar sekarang', placeholder = 'nama@toko.com' }) {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  const onDark = variant === 'dark';
  const inputBg = onDark ? 'rgba(244,237,224,0.08)' : 'var(--hi-card)';
  const inputBorder = onDark ? 'rgba(244,237,224,0.18)' : 'var(--hi-line)';
  const inputText = onDark ? 'var(--hi-paper)' : 'var(--hi-ink)';
  const btnBg = onDark ? 'var(--c-butter)' : 'var(--accent)';
  const btnFg = onDark ? 'var(--hi-ink)' : 'var(--accent-on)';

  if (submitted) {
    return (
      <div className="pl-form" style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '4px 6px 4px 18px',
        borderRadius: 999,
        background: onDark ? 'rgba(244,237,224,0.06)' : 'color-mix(in oklch, var(--c-sage) 12%, var(--hi-paper))',
        border: `1px solid ${onDark ? 'rgba(244,237,224,0.16)' : 'color-mix(in oklch, var(--c-sage) 30%, var(--hi-line))'}`,
        maxWidth: 460,
        width: '100%',
        margin: '0 auto',
      }}>
        <span style={{
          width: 26, height: 26, borderRadius: 999,
          background: btnBg, color: btnFg,
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 600,
          flex: 'none',
        }}>✓</span>
        <span style={{
          fontFamily: 'var(--hi-sans)', fontSize: 14,
          color: onDark ? 'var(--hi-paper)' : 'var(--hi-ink)',
          flex: 1, padding: '8px 0',
        }}>
          Makasih — kami kabari begitu akun kamu siap.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="pl-form" style={{
      display: 'flex',
      gap: 6,
      padding: 6,
      borderRadius: 999,
      background: inputBg,
      border: `1px solid ${inputBorder}`,
      maxWidth: 460,
      width: '100%',
      margin: '0 auto',
    }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        required
        style={{
          flex: 1,
          minWidth: 0,
          padding: '10px 14px',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          fontFamily: 'var(--hi-sans)',
          fontSize: 14,
          color: inputText,
        }}
      />
      <button type="submit" style={{
        padding: '10px 18px',
        borderRadius: 999,
        background: btnBg,
        color: btnFg,
        fontFamily: 'var(--hi-sans)',
        fontSize: 13,
        fontWeight: 500,
        border: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
      }}>{cta} →</button>
    </form>
  );
}

// ─── MockTemplatePicker — gallery of ready-made storefront templates ─────
// Replaces the old "drag-drop builder" mock. Mirrors the real product:
// merchants pick a template, not build from scratch.

function TplThumb({ name, kind, palette, selected }) {
  // Render a tiny faux storefront thumbnail in the chosen palette.
  const [bg, accent, ink] = palette;
  return (
    <div style={{
      position: 'relative',
      background: bg,
      borderRadius: 8,
      overflow: 'hidden',
      border: selected
        ? '2px solid var(--c-sage)'
        : '1px solid var(--hi-line)',
      boxShadow: selected ? '0 0 0 4px color-mix(in oklch, var(--c-sage) 18%, transparent)' : 'none',
      aspectRatio: '4 / 5',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* faux header strip */}
      <div style={{
        background: ink,
        height: 14,
        display: 'flex',
        alignItems: 'center',
        padding: '0 6px',
        gap: 4,
      }}>
        <div style={{ width: 6, height: 6, borderRadius: 999, background: accent }} />
        <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.25)', borderRadius: 999 }} />
      </div>

      {/* hero / banner block per template kind */}
      {kind === 'editorial' && (
        <div style={{ flex: 1, padding: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ height: 28, background: accent, borderRadius: 4 }} />
          <div style={{ height: 4, width: '60%', background: ink, borderRadius: 2, opacity: 0.7 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, flex: 1, marginTop: 2 }}>
            {[0,1,2,3].map((i) => (
              <div key={i} style={{
                background: i % 2 === 0 ? accent : 'rgba(0,0,0,0.08)',
                opacity: i % 2 === 0 ? 0.65 : 1,
                borderRadius: 2,
              }} />
            ))}
          </div>
        </div>
      )}
      {kind === 'grid' && (
        <div style={{ flex: 1, padding: 6, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {[0,1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} style={{
              background: [accent, 'rgba(0,0,0,0.08)', accent, 'rgba(0,0,0,0.05)', accent, 'rgba(0,0,0,0.08)', 'rgba(0,0,0,0.05)', accent, 'rgba(0,0,0,0.05)'][i],
              opacity: 0.7,
              borderRadius: 2,
            }} />
          ))}
        </div>
      )}
      {kind === 'feed' && (
        <div style={{ flex: 1, padding: 6, display: 'flex', flexDirection: 'column', gap: 3 }}>
          {[0,1,2].map((i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '14px 1fr',
              gap: 4,
              alignItems: 'center',
            }}>
              <div style={{ width: 14, height: 14, background: accent, borderRadius: 3, opacity: 0.7 }} />
              <div>
                <div style={{ height: 3, width: '70%', background: ink, opacity: 0.7, borderRadius: 2, marginBottom: 2 }} />
                <div style={{ height: 2, width: '50%', background: ink, opacity: 0.4, borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      )}
      {kind === 'split' && (
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div style={{ background: accent, opacity: 0.7 }} />
          <div style={{ padding: 4, display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
            <div style={{ height: 3, width: '70%', background: ink, opacity: 0.7, borderRadius: 2 }} />
            <div style={{ height: 2, width: '90%', background: ink, opacity: 0.35, borderRadius: 2 }} />
            <div style={{ height: 5, width: '50%', background: ink, borderRadius: 2, marginTop: 3 }} />
          </div>
        </div>
      )}

      {/* selected badge */}
      {selected && (
        <div style={{
          position: 'absolute',
          top: 4, right: 4,
          width: 16, height: 16,
          borderRadius: 999,
          background: 'var(--c-sage)',
          color: 'var(--hi-paper)',
          fontSize: 10,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1.5px solid var(--hi-paper)',
        }}>✓</div>
      )}

      {/* footer label */}
      <div style={{
        background: 'var(--hi-paper)',
        borderTop: '1px solid var(--hi-line)',
        padding: '4px 6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 9,
          color: 'var(--hi-ink)',
          fontWeight: 500,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}>{name}</span>
      </div>
    </div>
  );
}

function MockTemplatePicker() {
  const templates = [
    { name: 'Mocca',     kind: 'editorial', palette: ['#f4ede0', '#c97e6e', '#1c1a14'], cat: 'fashion' },
    { name: 'Garden',    kind: 'grid',      palette: ['#f1efe6', '#5d6b40', '#1c1a14'], cat: 'beauty',  selected: true },
    { name: 'Marigold',  kind: 'split',     palette: ['#fff7e2', '#e8b85a', '#1c1a14'], cat: 'food' },
    { name: 'Senja',     kind: 'editorial', palette: ['#fbeee2', '#b65a30', '#1c1a14'], cat: 'fashion' },
    { name: 'Pasar',     kind: 'feed',      palette: ['#fbf6ec', '#1c1a14', '#1c1a14'], cat: 'aksesori' },
    { name: 'Bazaar',    kind: 'grid',      palette: ['#efe7d6', '#a8553a', '#1c1a14'], cat: 'fashion' },
    { name: 'Studio',    kind: 'split',     palette: ['#1c1a14', '#e8b85a', '#f4ede0'], cat: 'beauty' },
    { name: 'Kebon',     kind: 'editorial', palette: ['#e8e4d3', '#5d6b40', '#1c1a14'], cat: 'food' },
  ];

  const cats = [
    { id: 'all',      label: 'Semua',     count: 18 },
    { id: 'fashion',  label: 'Fashion',   count: 6, active: true },
    { id: 'beauty',   label: 'Beauty',    count: 4 },
    { id: 'food',     label: 'Makanan',   count: 3 },
    { id: 'aksesori', label: 'Aksesori',  count: 3 },
    { id: 'live',     label: 'Live',      count: 2 },
  ];

  return (
    <div style={{
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '128px 1fr',
      background: 'var(--hi-card)',
    }}>
      {/* sidebar: categories */}
      <div style={{
        background: 'var(--hi-paper)',
        borderRight: '1px solid var(--hi-line)',
        padding: '14px 10px',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9,
          letterSpacing: '0.12em',
          color: 'var(--hi-muted)',
          textTransform: 'uppercase',
          padding: '4px 8px 8px',
        }}>Kategori</div>
        {cats.map((c) => (
          <div key={c.id} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '6px 8px',
            borderRadius: 6,
            background: c.active ? 'color-mix(in oklch, var(--c-sage) 14%, var(--hi-paper))' : 'transparent',
            color: c.active ? 'var(--c-sage)' : 'var(--hi-ink)',
            fontFamily: 'var(--hi-sans)',
            fontSize: 11,
            fontWeight: c.active ? 500 : 400,
          }}>
            <span>{c.label}</span>
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 9,
              opacity: 0.7,
            }}>{c.count}</span>
          </div>
        ))}
      </div>

      {/* main: grid */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
      }}>
        <div style={{
          padding: '12px 16px',
          borderBottom: '1px solid var(--hi-line)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--hi-paper)',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--hi-serif)',
              fontSize: 15,
              color: 'var(--hi-ink)',
              lineHeight: 1,
            }}>Pilih template</div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 9,
              color: 'var(--hi-muted)',
              marginTop: 4,
              letterSpacing: '0.08em',
            }}>FASHION · 6 TEMPLATE</div>
          </div>
          <div style={{
            padding: '5px 12px',
            borderRadius: 999,
            background: 'var(--c-sage)',
            color: 'var(--hi-paper)',
            fontFamily: 'var(--hi-sans)',
            fontSize: 10,
            fontWeight: 500,
          }}>Pakai "Garden" →</div>
        </div>
        <div style={{
          flex: 1,
          padding: 12,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: 'min-content',
          gap: 10,
          alignContent: 'start',
        }}>
          {templates.map((t) => (
            <TplThumb key={t.name} {...t} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────

function PlBracketWordmark({ size = 22, dotColor = 'var(--accent)', talaseColor = 'var(--hi-ink)', bracketColor = 'var(--accent)', eColor = 'var(--accent)' }) {
  return (
    <span style={{
      fontFamily: 'var(--hi-serif)',
      fontSize: size,
      letterSpacing: '-0.01em',
      lineHeight: 1,
      color: talaseColor,
      display: 'inline-flex',
      alignItems: 'baseline',
      whiteSpace: 'nowrap',
    }}>
      <span style={{ color: bracketColor, fontWeight: 300 }}>[</span>
      <span style={{ color: eColor, fontStyle: 'italic' }}>e</span>
      <span style={{ color: bracketColor, fontWeight: 300 }}>]</span>
      <span style={{
        display: 'inline-block',
        width: size * 0.13,
        height: size * 0.13,
        borderRadius: 999,
        background: dotColor,
        margin: `0 ${size * 0.12}px`,
        position: 'relative',
        top: -size * 0.05,
      }} />
      <span>talase</span>
    </span>
  );
}

function PlNav() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: 'var(--nav-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
      background: 'var(--hi-paper)',
      position: 'sticky', top: 0, zIndex: 5,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <PlBracketWordmark size={24} />
        <span style={{
          marginLeft: 8,
          padding: '3px 8px',
          borderRadius: 999,
          border: '1px solid color-mix(in oklch, var(--c-terra) 40%, var(--hi-line))',
          background: 'color-mix(in oklch, var(--c-terra) 12%, var(--hi-paper))',
          color: 'var(--c-terra)',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 9,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }} className="pl-nav-badge">● Soft launch</span>
      </div>
      <div className="hi-nav-items" style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
        {PL_CONTENT.nav.map((it) => (
          <span key={it} style={{ fontFamily: 'var(--hi-sans)', fontSize: 13, color: 'var(--hi-ink)' }}>{it}</span>
        ))}
        <span style={{
          padding: '6px 14px', borderRadius: 999,
          background: 'var(--accent)', color: 'var(--accent-on)',
          fontFamily: 'var(--hi-sans)', fontSize: 12, fontWeight: 500,
        }}>{PL_CONTENT.ctaWait}</span>
      </div>
    </div>
  );
}

function PlHero() {
  const h = PL_CONTENT.hero;
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
      position: 'relative',
    }}>
      <PlAnimatedChat messages={PL_CONTENT.warmup} />

      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: '6px 14px',
          borderRadius: 999,
          background: 'color-mix(in oklch, var(--c-terra) 14%, var(--hi-paper))',
          border: '1px solid color-mix(in oklch, var(--c-terra) 32%, var(--hi-line))',
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.14em',
          color: 'var(--c-terra)',
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: 999,
            background: 'var(--c-terra)',
            boxShadow: '0 0 0 4px color-mix(in oklch, var(--c-terra) 25%, transparent)',
            animation: 'jl-pulse 2s ease-in-out infinite',
          }} />
          {h.badge}
        </div>

        <h1 style={{
          fontFamily: 'var(--hi-serif)',
          fontSize: 'var(--h1)',
          margin: 'var(--h1-mt) 0 var(--h1-mb)',
          color: 'var(--hi-ink)',
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          fontWeight: 400,
        }}>
          {h.headline1}<br/>
          <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>
            {h.headline2}
          </em>
        </h1>
        <p style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 'var(--lead)',
          color: 'var(--hi-muted)',
          margin: '0 auto var(--cta-mt)',
          maxWidth: 540,
          lineHeight: 1.55,
        }}>{h.sub}</p>

        <WaitlistForm cta={h.cta} />

        <div style={{
          marginTop: 14,
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.1em',
          color: 'var(--hi-muted)',
          textTransform: 'uppercase',
        }}>{h.micro}</div>
      </div>

      {/* Hero product mockup — sneak peek */}
      <div style={{
        margin: 'var(--hero-mock-mt) auto 0',
        maxWidth: 'var(--hero-mock-max)',
        position: 'relative',
        perspective: '1800px',
      }}>
        <div style={{
          position: 'absolute',
          top: -14, left: 0, right: 0,
          display: 'flex', justifyContent: 'center',
          zIndex: 2,
        }}>
          <span style={{
            padding: '5px 14px',
            borderRadius: 999,
            background: 'var(--hi-ink)',
            color: 'var(--hi-paper)',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 9,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}>PRATINJAU · Toko yang sudah jalan</span>
        </div>
        <HeroStage>
          <FauxBrowser url="tokokamu.e-talase.com" height="var(--hero-mock-h)">
            <MockHeroStorefront animated />
          </FauxBrowser>
        </HeroStage>
      </div>
    </div>
  );
}

function PlProblem() {
  const p = PL_CONTENT.problem;
  const colorVar = {
    sage: 'var(--c-sage)', terra: 'var(--c-terra)',
    butter: 'var(--c-butter)', rose: 'var(--c-rose)',
  };
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
      background: 'color-mix(in oklch, var(--c-rose) 6%, var(--hi-paper))',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 28px' }}>
        <PlKicker>{p.kicker}</PlKicker>
        <h2 style={plH2()}>
          {p.headline1}
          <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--c-terra)' }}>
            {p.headlineEm}
          </em>
        </h2>
        <p style={{
          fontFamily: 'var(--hi-sans)', fontSize: 'var(--body)',
          color: 'var(--hi-muted)', margin: '14px auto 0',
          maxWidth: 500, lineHeight: 1.55,
        }}>{p.sub}</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 'var(--head-mb)' }}>
        <PlBubble side="me">
          <div style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: 9, letterSpacing: '0.1em',
            color: 'color-mix(in oklch, var(--accent-on) 70%, transparent)', marginBottom: 4,
          }}>MERCHANT · KELUHAN</div>
          Tiap bulan penjualan makin ramai, tapi yang masuk ke kantong belum banyak berubah.
        </PlBubble>
      </div>

      <div className="pl-problem-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 20,
        maxWidth: 980,
        margin: '0 auto',
      }}>
        {p.pains.map((pain) => {
          const c = colorVar[pain.color] || 'var(--c-terra)';
          return (
            <div key={pain.tag} style={{
              padding: 28,
              borderRadius: 18,
              background: 'var(--hi-card)',
              border: `1px solid color-mix(in oklch, ${c} 24%, var(--hi-line))`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -10, right: 2,
                fontFamily: 'var(--hi-serif)', fontStyle: 'italic',
                fontSize: 92, lineHeight: 1,
                color: `color-mix(in oklch, ${c} 16%, transparent)`,
                userSelect: 'none', pointerEvents: 'none',
              }}>{pain.tag}</div>
              <div style={{
                width: 34, height: 34, borderRadius: 999,
                background: `color-mix(in oklch, ${c} 18%, var(--hi-paper))`,
                color: c, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'JetBrains Mono, monospace', fontSize: 13, fontWeight: 600,
                marginBottom: 16, position: 'relative', zIndex: 1,
              }}>{pain.tag}</div>
              <h3 style={{
                fontFamily: 'var(--hi-serif)', fontSize: 'var(--h4)',
                margin: '0 0 10px', color: 'var(--hi-ink)',
                fontWeight: 400, letterSpacing: '-0.01em',
                position: 'relative', zIndex: 1,
              }}>{pain.title}</h3>
              <p style={{
                fontFamily: 'var(--hi-sans)', fontSize: 'var(--body)',
                color: 'var(--hi-muted)', margin: 0, lineHeight: 1.55,
                position: 'relative', zIndex: 1,
              }}>{pain.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlFeatures() {
  const mocks = {
    storefront: () => <MockHeroStorefront animated />,
    orders:     () => <MockOrderManagement />,
    stock:      () => <MockStockManager />,
  };
  const colorVar = {
    sage:   'var(--c-sage)',
    terra:  'var(--c-terra)',
    butter: 'var(--c-butter)',
  };
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto var(--head-mb)' }}>
        <PlKicker>Yang kamu dapatkan · 02</PlKicker>
        <h2 style={plH2()}>
          Kamu yang jualan.{' '}
          <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>Teknisnya kami.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--hi-sans)', fontSize: 'var(--body)',
          color: 'var(--hi-muted)', margin: '14px auto 0',
          maxWidth: 480, lineHeight: 1.55,
        }}>
          Bukan sekadar situs web — sistem operasional lengkap, dari toko sampai stok. Yang kamu lihat di bawah adalah versi yang sedang kami kembangkan.
        </p>
      </div>

      <div style={{ display: 'grid', gap: 'var(--feature-gap)' }}>
        {PL_CONTENT.features.map((f, i) => {
          const left = i % 2 === 0;
          const c = colorVar[f.color] || 'var(--accent)';
          return (
            <div key={f.tag} style={{
              padding: 'var(--feature-pad)',
              borderRadius: 18,
              background: `color-mix(in oklch, ${c} 6%, var(--hi-paper))`,
              border: `1px solid color-mix(in oklch, ${c} 22%, var(--hi-line))`,
            }}>
              <div style={{
                display: 'flex',
                justifyContent: left ? 'flex-start' : 'flex-end',
                marginBottom: 18,
              }}>
                <PlBubble side="them">
                  <div style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 9, letterSpacing: '0.1em',
                    color: 'var(--hi-muted)', marginBottom: 4,
                  }}>MERCHANT · KELUHAN</div>
                  {f.pain}
                </PlBubble>
              </div>
              <div className="hi-feature-row" style={{
                display: 'grid',
                gridTemplateColumns: 'var(--feature-cols)',
                gap: 'var(--feature-col-gap)',
                alignItems: 'center',
              }}>
                <div style={{ order: left ? 1 : 2 }}>
                  <FauxBrowser url={`app.e-talase.com/${f.mock}`} height="var(--feature-mock-h)">
                    {mocks[f.mock]()}
                  </FauxBrowser>
                </div>
                <div style={{ order: left ? 2 : 1 }}>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '4px 10px', borderRadius: 999,
                    background: `color-mix(in oklch, ${c} 18%, var(--hi-paper))`,
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10, letterSpacing: '0.1em',
                    color: c, marginBottom: 12,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: c }} />
                    #{f.tag} · SOLUSI
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--hi-serif)', fontSize: 'var(--h3)',
                    margin: '0 0 14px', color: 'var(--hi-ink)',
                    lineHeight: 1.05, letterSpacing: '-0.01em', fontWeight: 400,
                  }}>{f.name}</h3>
                  <p style={{
                    fontFamily: 'var(--hi-sans)', fontSize: 'var(--body)',
                    color: 'var(--hi-muted)', margin: '0 0 18px', lineHeight: 1.55, maxWidth: 380,
                  }}>{f.desc}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 380 }}>
                    {f.bullets.map((b, bi) => (
                      <div key={bi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{
                          flex: 'none', marginTop: 2,
                          width: 18, height: 18, borderRadius: 999,
                          background: `color-mix(in oklch, ${c} 20%, var(--hi-paper))`,
                          color: c,
                          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: 11, fontWeight: 700,
                        }}>✓</span>
                        <span style={{
                          fontFamily: 'var(--hi-sans)', fontSize: 'var(--body)',
                          color: 'var(--hi-ink)', lineHeight: 1.45,
                        }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlComparison() {
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto var(--head-mb)' }}>
        <PlKicker>Bandingkan · jujur · 03</PlKicker>
        <h2 style={plH2()}>
          Marketplace untuk mulai.{' '}
          <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>Toko sendiri untuk bertahan.</em>
        </h2>
        <p style={{
          fontFamily: 'var(--hi-sans)', fontSize: 'var(--body)',
          color: 'var(--hi-muted)', margin: '14px auto 0',
          maxWidth: 480, lineHeight: 1.55,
        }}>
          Tapi nggak semua harus dibangun dari nol. Bagian yang rumit itu tugas kami.
        </p>
      </div>
      <div style={{
        maxWidth: 920, margin: '0 auto',
        border: '1px solid var(--hi-line)',
        borderRadius: 14,
        overflow: 'hidden',
        background: 'var(--hi-card)',
        boxShadow: '0 24px 60px -34px rgba(28,26,20,0.3)',
      }}>
        <div style={{ overflowX: 'auto' }}>
          <div style={{
            minWidth: 640,
            display: 'grid',
            gridTemplateColumns: '1.15fr 1fr 1fr 1.2fr',
          }}>
            {/* Header row */}
            <div style={{ padding: '16px 18px', background: 'var(--hi-paper)' }} />
            <div style={{
              padding: '16px 16px', background: 'var(--hi-paper)',
              fontFamily: 'var(--hi-sans)', fontSize: 13, fontWeight: 500,
              color: 'var(--hi-muted)', textAlign: 'center', lineHeight: 1.3,
            }}>Lewat<br/>marketplace</div>
            <div style={{
              padding: '16px 16px', background: 'var(--hi-paper)',
              fontFamily: 'var(--hi-sans)', fontSize: 13, fontWeight: 500,
              color: 'var(--hi-muted)', textAlign: 'center', lineHeight: 1.3,
            }}>Bangun web<br/>sendiri</div>
            <div style={{
              padding: '16px 16px',
              background: 'var(--accent)',
              fontFamily: 'var(--hi-serif)', fontSize: 17, fontStyle: 'italic',
              color: 'var(--accent-on)', textAlign: 'center', lineHeight: 1.15,
            }}>Pakai<br/>e-talase</div>

            {/* Data rows */}
            {PL_CONTENT.comparison.rows.map((r, i) => (
              <React.Fragment key={i}>
                <div style={{
                  padding: '14px 18px',
                  borderTop: '1px solid var(--hi-line)',
                  fontFamily: 'JetBrains Mono, monospace', fontSize: 11,
                  letterSpacing: '0.04em', textTransform: 'uppercase',
                  color: 'var(--hi-muted)',
                  display: 'flex', alignItems: 'center',
                }}>{r.label}</div>
                <div style={{
                  padding: '14px 16px',
                  borderTop: '1px solid var(--hi-line)',
                  fontFamily: 'var(--hi-sans)', fontSize: 13,
                  color: 'var(--hi-muted)', textAlign: 'center', lineHeight: 1.4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{r.a}</div>
                <div style={{
                  padding: '14px 16px',
                  borderTop: '1px solid var(--hi-line)',
                  fontFamily: 'var(--hi-sans)', fontSize: 13,
                  color: 'var(--hi-muted)', textAlign: 'center', lineHeight: 1.4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>{r.b}</div>
                <div style={{
                  padding: '14px 16px',
                  borderTop: '1px solid color-mix(in oklch, var(--c-sage) 22%, var(--hi-line))',
                  background: 'color-mix(in oklch, var(--c-sage) 11%, var(--hi-paper))',
                  fontFamily: 'var(--hi-sans)', fontSize: 13, fontWeight: 500,
                  color: 'var(--hi-ink)', textAlign: 'center', lineHeight: 1.4,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                }}>
                  <span style={{ color: 'var(--accent)', fontWeight: 700, flex: 'none' }}>✓</span>
                  <span>{r.c}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlFounder() {
  const f = PL_CONTENT.founder;
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
      background: 'color-mix(in oklch, var(--c-sage) 8%, var(--hi-paper))',
    }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--head-mb)' }}>
          <PlKicker>Surat dari pendiri</PlKicker>
          <h2 style={plH2()}>
            Kenapa kami{' '}
            <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>
              bikin ini.
            </em>
          </h2>
        </div>
        <div style={{
          display: 'flex',
          gap: 18,
          alignItems: 'flex-start',
        }}>
          <div className="pl-founder-ava" style={{
            width: 56, height: 56, borderRadius: 999,
            background: 'color-mix(in oklch, var(--accent) 30%, var(--hi-paper))',
            border: '1px solid var(--hi-line)',
            flex: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--hi-serif)',
            fontSize: 24, color: 'var(--accent)',
          }}>D</div>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 0,
          }}>
            {f.lines.map((line, i) => (
              <PlBubble key={i} side="them" size={15}>
                {line}
              </PlBubble>
            ))}
            <div style={{
              alignSelf: 'flex-start',
              marginTop: 10,
              fontFamily: 'var(--hi-serif)',
              fontStyle: 'italic',
              fontSize: 16,
              color: 'var(--hi-muted)',
            }}>{f.signoff}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlPerks() {
  const colorVar = {
    sage:   'var(--c-sage)',
    terra:  'var(--c-terra)',
    butter: 'var(--c-butter)',
    rose:   'var(--c-rose)',
  };
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto var(--head-mb)' }}>
        <PlKicker>Untungnya gabung sekarang · 04</PlKicker>
        <h2 style={plH2()}>
          Empat alasan{' '}
          <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>
            gabung lebih awal.
          </em>
        </h2>
      </div>
      <div className="pl-perks-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        maxWidth: 920,
        margin: '0 auto',
      }}>
        {PL_CONTENT.perks.map((p, i) => {
          const c = colorVar[p.color] || 'var(--accent)';
          return (
            <div key={p.tag} style={{
              padding: 28,
              borderRadius: 18,
              background: `color-mix(in oklch, ${c} 8%, var(--hi-paper))`,
              border: `1px solid color-mix(in oklch, ${c} 24%, var(--hi-line))`,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: -8, right: -8,
                fontFamily: 'var(--hi-serif)',
                fontSize: 88,
                color: `color-mix(in oklch, ${c} 18%, transparent)`,
                fontStyle: 'italic',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>{p.tag}</div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '4px 10px', borderRadius: 999,
                background: `color-mix(in oklch, ${c} 18%, var(--hi-paper))`,
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: 10, letterSpacing: '0.1em',
                color: c, marginBottom: 14,
                position: 'relative', zIndex: 1,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: c }} />
                PERK · {p.tag}
              </div>
              <h3 style={{
                fontFamily: 'var(--hi-serif)',
                fontSize: 'var(--h3)',
                margin: '0 0 10px',
                color: 'var(--hi-ink)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
                fontWeight: 400,
                position: 'relative',
                zIndex: 1,
              }}>{p.title}</h3>
              <p style={{
                fontFamily: 'var(--hi-sans)',
                fontSize: 'var(--body)',
                color: 'var(--hi-muted)',
                margin: 0,
                lineHeight: 1.55,
                position: 'relative',
                zIndex: 1,
              }}>{p.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlRoadmap() {
  const stateStyle = (s) => {
    switch (s) {
      case 'now':   return { dot: 'var(--c-terra)', glow: 'color-mix(in oklch, var(--c-terra) 25%, transparent)', label: 'SEDANG BERJALAN' };
      case 'next':  return { dot: 'var(--c-sage)',  glow: 'transparent', label: 'BERIKUTNYA' };
      case 'soon':  return { dot: 'var(--c-butter)',glow: 'transparent', label: 'NANTI' };
      case 'later': return { dot: 'var(--hi-muted)',glow: 'transparent', label: 'MASIH JAUH' };
      default:      return { dot: 'var(--accent)',  glow: 'transparent', label: '' };
    }
  };
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      borderBottom: '1px solid var(--hi-line)',
      background: 'var(--hi-card)',
    }}>
      <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto var(--head-mb)' }}>
        <PlKicker>Roadmap · transparan</PlKicker>
        <h2 style={plH2()}>
          Apa{' '}
          <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--accent)' }}>
            yang akan datang
          </em>, kapan.
        </h2>
        <p style={{
          fontFamily: 'var(--hi-sans)', fontSize: 'var(--body)',
          color: 'var(--hi-muted)', margin: '14px auto 0',
          maxWidth: 480, lineHeight: 1.55,
        }}>
          Tanggal bisa bergeser, tapi urutannya sudah pasti.
        </p>
      </div>
      <div className="pl-roadmap" style={{
        maxWidth: 820, margin: '0 auto',
        position: 'relative',
      }}>
        <div className="pl-roadmap-rail" style={{
          position: 'absolute',
          left: 22,
          top: 12,
          bottom: 12,
          width: 1,
          background: 'var(--hi-line)',
        }} />
        {PL_CONTENT.roadmap.map((r, i) => {
          const s = stateStyle(r.state);
          return (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '46px 1fr',
              gap: 20,
              padding: '14px 0',
              position: 'relative',
            }}>
              <div style={{
                position: 'relative',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
                paddingTop: 6,
              }}>
                <span style={{
                  width: r.state === 'now' ? 16 : 12,
                  height: r.state === 'now' ? 16 : 12,
                  borderRadius: 999,
                  background: s.dot,
                  boxShadow: r.state === 'now' ? `0 0 0 8px ${s.glow}` : 'none',
                  border: '2px solid var(--hi-card)',
                  animation: r.state === 'now' ? 'jl-pulse 2s ease-in-out infinite' : 'none',
                  position: 'relative',
                  zIndex: 1,
                }} />
              </div>
              <div style={{
                background: r.state === 'now'
                  ? 'color-mix(in oklch, var(--c-terra) 8%, var(--hi-paper))'
                  : 'var(--hi-paper)',
                border: r.state === 'now'
                  ? '1px solid color-mix(in oklch, var(--c-terra) 28%, var(--hi-line))'
                  : '1px solid var(--hi-line)',
                borderRadius: 14,
                padding: '16px 20px',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: 12,
                  marginBottom: 6,
                  flexWrap: 'wrap',
                }}>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: 10,
                    letterSpacing: '0.12em',
                    color: s.dot,
                    textTransform: 'uppercase',
                  }}>{s.label} · {r.label}</span>
                </div>
                <h4 style={{
                  fontFamily: 'var(--hi-serif)',
                  fontSize: 'var(--h4)',
                  margin: '0 0 6px',
                  color: 'var(--hi-ink)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                }}>{r.title}</h4>
                <p style={{
                  fontFamily: 'var(--hi-sans)',
                  fontSize: 'var(--body)',
                  color: 'var(--hi-muted)',
                  margin: 0,
                  lineHeight: 1.55,
                }}>{r.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlFooter() {
  return (
    <div style={{
      padding: 'var(--section-py) var(--gutter)',
      background: 'var(--hi-ink)',
      color: 'var(--hi-paper)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: -60, right: -40,
        width: 220, height: 220, borderRadius: 999,
        background: 'var(--c-terra)', opacity: 0.55,
        filter: 'blur(2px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -80, right: 180,
        width: 160, height: 160, borderRadius: 999,
        background: 'var(--c-butter)', opacity: 0.45,
      }} />
      <div style={{
        position: 'absolute',
        bottom: -30, left: -30,
        width: 120, height: 120, borderRadius: 999,
        background: 'var(--c-sage)', opacity: 0.35,
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 720, margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          letterSpacing: '0.16em',
          color: 'var(--c-butter)',
          textTransform: 'uppercase',
        }}>Promo soft launch · Gratis bulan pertama</div>
        <h2 style={{
          fontFamily: 'var(--hi-serif)',
          fontSize: 'var(--h2)',
          margin: '12px 0 18px',
          color: 'var(--hi-paper)',
          letterSpacing: '-0.02em',
          fontWeight: 400,
          lineHeight: 1.05,
        }}>
          Daftar sekarang,{' '}
          <em style={{ fontFamily: 'var(--hi-serif)', fontStyle: 'italic', color: 'var(--c-butter)' }}>
            mulai jualan.
          </em>
        </h2>
        <p style={{
          fontFamily: 'var(--hi-sans)',
          fontSize: 'var(--body)',
          color: 'color-mix(in oklch, var(--hi-paper) 75%, transparent)',
          margin: '0 auto 28px',
          maxWidth: 460,
          lineHeight: 1.55,
        }}>
          Tinggalkan email kamu. Kami kabari begitu akun kamu siap — tanpa spam, tanpa jual data.
        </p>

        <WaitlistForm variant="dark" cta="Daftar sekarang" />
      </div>

      <div style={{
        position: 'relative', zIndex: 1,
        marginTop: 80,
        paddingTop: 28,
        borderTop: '1px solid rgba(244,237,224,0.14)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 18,
      }}>
        <div style={{
          fontSize: 22,
          lineHeight: 1,
        }}>
          <PlBracketWordmark
            size={22}
            talaseColor="var(--hi-paper)"
            bracketColor="var(--c-butter)"
            eColor="var(--c-butter)"
            dotColor="var(--c-butter)"
          />
        </div>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10,
          color: 'color-mix(in oklch, var(--hi-paper) 60%, transparent)',
          letterSpacing: '0.1em',
        }}>
          © 2026 · KARYA ANAK INDONESIA 🇮🇩
        </div>
      </div>
    </div>
  );
}

const PRELAUNCH_CSS = `
@keyframes jl-pulse {
  0%, 100% { transform: scale(1);   opacity: 1;   }
  50%      { transform: scale(1.18); opacity: 0.65; }
}
.pl-form input::placeholder {
  color: color-mix(in oklch, currentColor 55%, transparent);
}
@media (max-width: 720px) {
  .pl-perks-grid { grid-template-columns: 1fr !important; }
  .pl-problem-grid { grid-template-columns: 1fr !important; }
  .pl-form { flex-direction: column !important; gap: 8px !important; padding: 8px !important; }
  .pl-form button, .pl-form input { width: 100%; }
}
`;

function PrelaunchApp() {
  return (
    <div style={{ background: 'var(--hi-paper)', minHeight: '100%', color: 'var(--hi-ink)' }}>
      <style>{PRELAUNCH_CSS}</style>
      <PlNav />
      <PlHero />
      <PlProblem />
      <PlFeatures />
      <PlComparison />
      <PlFounder />
      <PlPerks />
      <PlRoadmap />
      <PlFooter />
    </div>
  );
}

Object.assign(window, { PrelaunchApp });
