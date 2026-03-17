import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './assets/letters_and_lace_logo.png'
import OrderPage from './orderpage'
import AboutPage from './Aboutpage'
import ProductsPage from './Productspage'
import ReviewsPage from './ReviewsPage'

/* ─── Falling Petals Component ─── */
function FallingPetals() {
  const petals = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.floor(Math.random() * 100)}%`,
    dur: `${7 + (i * 0.7)}s`,
    delay: `${(i * 0.55) % 10}s`,
    size: 8 + (i % 5) * 2,
    color: ['#D4B5A8','#C9A89B','#E8D5CF','#C6A75E','#B89485'][i % 5],
    r0: `${(i % 3 - 1) * 20}deg`,
    r1: `${i * 37}deg`,
  }))

  return (
    <div style={{ position:'fixed', inset:0, pointerEvents:'none', overflow:'hidden', zIndex:98 }}>
      <style>{`
        @keyframes driftPetal {
          0%  { transform: translateY(0)      rotate(var(--r0)); opacity: .65; }
          100%{ transform: translateY(110vh)  rotate(var(--r1)); opacity: 0;   }
        }
      `}</style>
      {petals.map(p => (
        <div key={p.id} style={{
          position:'absolute', left:p.left, top:'-20px',
          width:`${p.size}px`, height:`${p.size * 1.6}px`,
          background:p.color, borderRadius:'50% 30% 50% 30%',
          '--r0':p.r0, '--r1':p.r1,
          animation:`driftPetal ${p.dur} linear ${p.delay} infinite`,
        }}/>
      ))}
    </div>
  )
}

/* ─── Lace Corner Frame ─── */
function LaceFrame() {
  return (
    <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:100 }}>
      <svg width="100%" height="100%" style={{ position:'absolute', inset:0 }}
           viewBox="0 0 1200 900" preserveAspectRatio="none"
           xmlns="http://www.w3.org/2000/svg">
        <defs>
          <style>{`
            .lc{fill:none;stroke:#C9A89B;stroke-width:0.8;opacity:0.55}
            .lf{fill:#C9A89B;opacity:0.18}
            .ld{fill:#C6A75E;opacity:0.4}
          `}</style>
        </defs>

        {/* TOP-LEFT */}
        <g>
          <path className="lc" d="M0,80 Q20,60 40,80 Q60,60 80,80 Q100,60 120,80 Q140,60 160,80"/>
          <path className="lc" d="M80,0 Q60,20 80,40 Q60,60 80,80 Q60,100 80,120 Q60,140 80,160"/>
          <path className="lc" d="M20,20 C60,20 20,60 60,60 C100,60 60,100 60,100"/>
          <path className="lc" d="M10,10 Q50,10 50,50 Q50,90 10,90"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(-45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(0 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(90 60 60)"/>
          <circle className="ld" cx="60" cy="60" r="5"/>
          {[20,60,100,140].map(x => <circle key={x} className="ld" cx={x} cy="82" r="3"/>)}
          {[20,60,100,140].map(y => <circle key={y} className="ld" cx="82" cy={y} r="3"/>)}
          <path className="lc" d="M0,0 L160,0 M0,0 L0,160"/>
          <path className="lc" d="M5,5 L155,5 M5,5 L5,155"/>
        </g>

        {/* TOP-RIGHT */}
        <g transform="translate(1200,0) scale(-1,1)">
          <path className="lc" d="M0,80 Q20,60 40,80 Q60,60 80,80 Q100,60 120,80 Q140,60 160,80"/>
          <path className="lc" d="M80,0 Q60,20 80,40 Q60,60 80,80 Q60,100 80,120 Q60,140 80,160"/>
          <path className="lc" d="M20,20 C60,20 20,60 60,60 C100,60 60,100 60,100"/>
          <path className="lc" d="M10,10 Q50,10 50,50 Q50,90 10,90"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(-45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(0 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(90 60 60)"/>
          <circle className="ld" cx="60" cy="60" r="5"/>
          {[20,60,100,140].map(x => <circle key={x} className="ld" cx={x} cy="82" r="3"/>)}
          {[20,60,100,140].map(y => <circle key={y} className="ld" cx="82" cy={y} r="3"/>)}
          <path className="lc" d="M0,0 L160,0 M0,0 L0,160"/>
          <path className="lc" d="M5,5 L155,5 M5,5 L5,155"/>
        </g>

        {/* BOTTOM-LEFT */}
        <g transform="translate(0,900) scale(1,-1)">
          <path className="lc" d="M0,80 Q20,60 40,80 Q60,60 80,80 Q100,60 120,80 Q140,60 160,80"/>
          <path className="lc" d="M80,0 Q60,20 80,40 Q60,60 80,80 Q60,100 80,120 Q60,140 80,160"/>
          <path className="lc" d="M20,20 C60,20 20,60 60,60 C100,60 60,100 60,100"/>
          <path className="lc" d="M10,10 Q50,10 50,50 Q50,90 10,90"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(-45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(0 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(90 60 60)"/>
          <circle className="ld" cx="60" cy="60" r="5"/>
          {[20,60,100,140].map(x => <circle key={x} className="ld" cx={x} cy="82" r="3"/>)}
          {[20,60,100,140].map(y => <circle key={y} className="ld" cx="82" cy={y} r="3"/>)}
          <path className="lc" d="M0,0 L160,0 M0,0 L0,160"/>
          <path className="lc" d="M5,5 L155,5 M5,5 L5,155"/>
        </g>

        {/* BOTTOM-RIGHT */}
        <g transform="translate(1200,900) scale(-1,-1)">
          <path className="lc" d="M0,80 Q20,60 40,80 Q60,60 80,80 Q100,60 120,80 Q140,60 160,80"/>
          <path className="lc" d="M80,0 Q60,20 80,40 Q60,60 80,80 Q60,100 80,120 Q60,140 80,160"/>
          <path className="lc" d="M20,20 C60,20 20,60 60,60 C100,60 60,100 60,100"/>
          <path className="lc" d="M10,10 Q50,10 50,50 Q50,90 10,90"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(-45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(45 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(0 60 60)"/>
          <ellipse className="lf" cx="60" cy="60" rx="18" ry="28" transform="rotate(90 60 60)"/>
          <circle className="ld" cx="60" cy="60" r="5"/>
          {[20,60,100,140].map(x => <circle key={x} className="ld" cx={x} cy="82" r="3"/>)}
          {[20,60,100,140].map(y => <circle key={y} className="ld" cx="82" cy={y} r="3"/>)}
          <path className="lc" d="M0,0 L160,0 M0,0 L0,160"/>
          <path className="lc" d="M5,5 L155,5 M5,5 L5,155"/>
        </g>

        {/* TOP EDGE scallop */}
        <path className="lc" d="M160,5 Q180,18 200,5 Q220,18 240,5 Q260,18 280,5 Q300,18 320,5 Q340,18 360,5 Q380,18 400,5 Q420,18 440,5 Q460,18 480,5 Q500,18 520,5 Q540,18 560,5 Q580,18 600,5 Q620,18 640,5 Q660,18 680,5 Q700,18 720,5 Q740,18 760,5 Q780,18 800,5 Q820,18 840,5 Q860,18 880,5 Q900,18 920,5 Q940,18 960,5 Q980,18 1000,5 Q1020,18 1040,5"/>
        {/* BOTTOM EDGE scallop */}
        <path className="lc" d="M160,895 Q180,882 200,895 Q220,882 240,895 Q260,882 280,895 Q300,882 320,895 Q340,882 360,895 Q380,882 400,895 Q420,882 440,895 Q460,882 480,895 Q500,882 520,895 Q540,882 560,895 Q580,882 600,895 Q620,882 640,895 Q660,882 680,895 Q700,882 720,895 Q740,882 760,895 Q780,882 800,895 Q820,882 840,895 Q860,882 880,895 Q900,882 920,895 Q940,882 960,895 Q980,882 1000,895 Q1020,882 1040,895"/>
        {/* LEFT EDGE scallop */}
        <path className="lc" d="M5,160 Q18,180 5,200 Q18,220 5,240 Q18,260 5,280 Q18,300 5,320 Q18,340 5,360 Q18,380 5,400 Q18,420 5,440 Q18,460 5,480 Q18,500 5,520 Q18,540 5,560 Q18,580 5,600 Q18,620 5,640 Q18,660 5,680 Q18,700 5,720 Q18,740 5,740"/>
        {/* RIGHT EDGE scallop */}
        <path className="lc" d="M1195,160 Q1182,180 1195,200 Q1182,220 1195,240 Q1182,260 1195,280 Q1182,300 1195,320 Q1182,340 1195,360 Q1182,380 1195,400 Q1182,420 1195,440 Q1182,460 1195,480 Q1182,500 1195,520 Q1182,540 1195,560 Q1182,580 1195,600 Q1182,620 1195,640 Q1182,660 1195,680 Q1182,700 1195,720 Q1182,740 1195,740"/>
      </svg>
    </div>
  )
}

/* ─── Hero Background Decorations (SVG) ─── */
function HeroBgDecor() {
  return (
    <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
      <svg width="100%" height="100%" viewBox="0 0 1200 560"
           preserveAspectRatio="xMidYMid slice"
           style={{ position:'absolute', inset:0 }}
           xmlns="http://www.w3.org/2000/svg">

        {/* LEFT LARGE ROSE */}
        <g transform="translate(90,180)" opacity="0.18">
          {[0,45,90,135,180,225,270,315].map(r => (
            <ellipse key={r} cx="0" cy="-26" rx="14" ry="22" fill="#D4B5A8" transform={`rotate(${r})`}/>
          ))}
          <circle cx="0" cy="0" r="16" fill="#C9A89B"/>
          <circle cx="0" cy="0" r="8"  fill="#B89485"/>
        </g>

        {/* RIGHT LARGE ROSE */}
        <g transform="translate(1110,240)" opacity="0.16">
          {[0,45,90,135,180,225,270,315].map(r => (
            <ellipse key={r} cx="0" cy="-24" rx="12" ry="20" fill="#D4B5A8" transform={`rotate(${r})`}/>
          ))}
          <circle cx="0" cy="0" r="14" fill="#C9A89B"/>
          <circle cx="0" cy="0" r="7"  fill="#B89485"/>
        </g>

        {/* SMALL 5-PETAL FLOWER top-left */}
        <g transform="translate(200,60)" opacity="0.14">
          {[0,72,144,216,288].map(r => (
            <ellipse key={r} cx="0" cy="-10" rx="5" ry="9" fill="#C9A89B" transform={`rotate(${r})`}/>
          ))}
          <circle cx="0" cy="0" r="4" fill="#C6A75E"/>
        </g>

        {/* SMALL 5-PETAL FLOWER top-right */}
        <g transform="translate(980,80)" opacity="0.12">
          {[0,72,144,216,288].map(r => (
            <ellipse key={r} cx="0" cy="-10" rx="5" ry="9" fill="#C9A89B" transform={`rotate(${r})`}/>
          ))}
          <circle cx="0" cy="0" r="4" fill="#C6A75E"/>
        </g>

        {/* SMALL 6-PETAL FLOWER bottom-left */}
        <g transform="translate(140,400)" opacity="0.13">
          {[0,60,120,180,240,300].map(r => (
            <ellipse key={r} cx="0" cy="-8" rx="4" ry="7" fill="#C9A89B" transform={`rotate(${r})`}/>
          ))}
          <circle cx="0" cy="0" r="3" fill="#C6A75E"/>
        </g>

        {/* SMALL 6-PETAL FLOWER bottom-right */}
        <g transform="translate(1050,420)" opacity="0.11">
          {[0,60,120,180,240,300].map(r => (
            <ellipse key={r} cx="0" cy="-8" rx="4" ry="7" fill="#C9A89B" transform={`rotate(${r})`}/>
          ))}
          <circle cx="0" cy="0" r="3" fill="#C6A75E"/>
        </g>

        {/* SCATTERED ROSE PETALS */}
        <ellipse cx="320" cy="100" rx="8" ry="14" fill="#D4B5A8" opacity="0.2"  transform="rotate(-30 320 100)"/>
        <ellipse cx="880" cy="130" rx="7" ry="12" fill="#D4B5A8" opacity="0.18" transform="rotate(20 880 130)"/>
        <ellipse cx="160" cy="300" rx="6" ry="11" fill="#C9A89B" opacity="0.2"  transform="rotate(45 160 300)"/>
        <ellipse cx="1060" cy="320" rx="8" ry="13" fill="#D4B5A8" opacity="0.16" transform="rotate(-15 1060 320)"/>
        <ellipse cx="420" cy="480" rx="7" ry="12" fill="#C9A89B" opacity="0.15" transform="rotate(60 420 480)"/>
        <ellipse cx="790" cy="460" rx="6" ry="10" fill="#D4B5A8" opacity="0.18" transform="rotate(-40 790 460)"/>
        <ellipse cx="260" cy="490" rx="5" ry="9"  fill="#C9A89B" opacity="0.14" transform="rotate(25 260 490)"/>
        <ellipse cx="940" cy="490" rx="7" ry="11" fill="#D4B5A8" opacity="0.15" transform="rotate(-55 940 490)"/>
        <ellipse cx="50"  cy="100" rx="6" ry="10" fill="#C9A89B" opacity="0.18" transform="rotate(10 50 100)"/>
        <ellipse cx="1150" cy="150" rx="7" ry="12" fill="#D4B5A8" opacity="0.14" transform="rotate(-20 1150 150)"/>

        {/* BEAD STRAND — top-left diagonal */}
        <g opacity="0.28">
          <path d="M40,140 L112,212" fill="none" stroke="#C9A89B" strokeWidth="0.8" opacity="0.5"/>
          {[[40,140],[52,152],[64,164],[76,176],[88,188],[100,200],[112,212]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={i%2===0?4:3.5} fill={i%2===0?'#C6A75E':'#D4B5A8'}/>
          ))}
        </g>

        {/* BEAD STRAND — top-right diagonal */}
        <g opacity="0.25">
          <path d="M1160,130 L1100,190" fill="none" stroke="#C9A89B" strokeWidth="0.8" opacity="0.5"/>
          {[[1160,130],[1148,142],[1136,154],[1124,166],[1112,178],[1100,190]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={i%2===0?4:3.5} fill={i%2===0?'#C6A75E':'#D4B5A8'}/>
          ))}
        </g>

        {/* BEAD ARC — top centre */}
        <g opacity="0.22">
          <path d="M380,22 Q460,8 540,22" fill="none" stroke="#C9A89B" strokeWidth="0.8" opacity="0.5"/>
          {[380,400,420,440,460,480,500,520,540].map((x,i) => (
            <circle key={i} cx={x} cy={i===0||i===8?22:i===4?13:i<4?22-i*2:22-(8-i)*2}
                    r={i%2===0?3:3.5} fill={i%2===0?'#C6A75E':'#D4B5A8'}/>
          ))}
        </g>

        {/* ENVELOPE — top-left */}
        <g transform="translate(55,60) rotate(-15)" opacity="0.12">
          <rect x="0" y="0" width="38" height="26" rx="2" fill="#C9A89B"/>
          <path d="M0,0 L19,16 L38,0" fill="none" stroke="#FAF6F1" strokeWidth="1.2"/>
          <path d="M0,26 L14,12"      fill="none" stroke="#FAF6F1" strokeWidth="1"/>
          <path d="M38,26 L24,12"     fill="none" stroke="#FAF6F1" strokeWidth="1"/>
        </g>

        {/* ENVELOPE — top-right */}
        <g transform="translate(1110,60) rotate(12)" opacity="0.11">
          <rect x="0" y="0" width="34" height="24" rx="2" fill="#C9A89B"/>
          <path d="M0,0 L17,14 L34,0" fill="none" stroke="#FAF6F1" strokeWidth="1.2"/>
          <path d="M0,24 L12,10"      fill="none" stroke="#FAF6F1" strokeWidth="1"/>
          <path d="M34,24 L22,10"     fill="none" stroke="#FAF6F1" strokeWidth="1"/>
        </g>

        {/* ENVELOPE — bottom-right */}
        <g transform="translate(1100,380) rotate(-8)" opacity="0.10">
          <rect x="0" y="0" width="30" height="21" rx="2" fill="#C6A75E"/>
          <path d="M0,0 L15,13 L30,0" fill="none" stroke="#FAF6F1" strokeWidth="1"/>
          <path d="M0,21 L11,9"       fill="none" stroke="#FAF6F1" strokeWidth="0.8"/>
          <path d="M30,21 L19,9"      fill="none" stroke="#FAF6F1" strokeWidth="0.8"/>
        </g>

        {/* ENVELOPE — bottom-left */}
        <g transform="translate(60,380) rotate(10)" opacity="0.10">
          <rect x="0" y="0" width="30" height="21" rx="2" fill="#C6A75E"/>
          <path d="M0,0 L15,13 L30,0" fill="none" stroke="#FAF6F1" strokeWidth="1"/>
        </g>

        {/* GOLD SPARKLES */}
        {[[310,50,14,.35],[890,55,10,.3],[175,230,10,.25],[1025,200,12,.28],[600,30,16,.25],[68,490,10,.22],[1130,480,10,.22]].map(([x,y,fs,op],i) => (
          <text key={i} x={x} y={y} fontSize={fs} fill="#C6A75E" opacity={op}>✦</text>
        ))}

        {/* LEAF SPRIGS */}
        <g transform="translate(290,460)" opacity="0.15">
          <path d="M0,0 C-8,-15 -18,-12 -14,-4" fill="#B8A090"/>
          <path d="M0,0 C8,-15 18,-12 14,-4"  fill="#B8A090"/>
          <line x1="0" y1="0" x2="0" y2="-18" stroke="#C9A89B" strokeWidth="0.8"/>
        </g>
        <g transform="translate(910,440)" opacity="0.14">
          <path d="M0,0 C-8,-15 -18,-12 -14,-4" fill="#B8A090"/>
          <path d="M0,0 C8,-15 18,-12 14,-4"  fill="#B8A090"/>
          <line x1="0" y1="0" x2="0" y2="-18" stroke="#C9A89B" strokeWidth="0.8"/>
        </g>
      </svg>
    </div>
  )
}

/* ─── Bead Strand SVG (reusable) ─── */
function BeadStrand({ flip = false }) {
  return (
    <div style={{ textAlign:'center', marginBottom: flip ? 0 : 8, marginTop: flip ? 8 : 0, opacity:.32 }}>
      <svg width="260" height="20" viewBox="0 0 260 20">
        <path d={flip ? "M10,10 Q65,18 130,10 Q195,2 250,10" : "M10,10 Q65,2 130,10 Q195,18 250,10"}
              fill="none" stroke="#C9A89B" strokeWidth="0.8"/>
        {[[10,10,3.5,'#C6A75E'],[45,flip?15:5,3,'#D4B5A8'],[80,flip?15:5,3.5,'#C6A75E'],
           [115,flip?7:7,3,'#D4B5A8'],[130,10,4,'#C6A75E'],[145,flip?13:13,3,'#D4B5A8'],
           [180,flip?5:15,3.5,'#C6A75E'],[215,flip?5:15,3,'#D4B5A8'],[250,10,3.5,'#C6A75E']].map(([cx,cy,r,fill],i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill={fill}/>
        ))}
      </svg>
    </div>
  )
}

/* ─── Divider ─── */
function Divider() {
  return (
    <div className="flex items-center gap-4 px-20 opacity-30">
      <div className="flex-1 h-px bg-dustyrose"/>
      <span className="text-gold text-xl">✦</span>
      <span className="text-gold text-2xl">✦</span>
      <span className="text-gold text-xl">✦</span>
      <div className="flex-1 h-px bg-dustyrose"/>
    </div>
  )
}

/* ─────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────── */
function HomePage() {
  return (
    <div className="min-h-screen bg-cream font-lora">
      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        @keyframes roseGlow {
          0%,100% { box-shadow: 0 0 0px rgba(198,167,94,0); }
          50%      { box-shadow: 0 0 22px rgba(198,167,94,.5); }
        }
        @keyframes shimmer {
          0%,100% { opacity:.4; }
          50%      { opacity:.85; }
        }
        .fade-up { animation: fadeUp .7s ease forwards; }
        .hero-section {
          position:relative; text-align:center;
          padding:80px 24px 72px; overflow:hidden;
          min-height:560px; display:flex; flex-direction:column;
          align-items:center; justify-content:center;
        }
      `}</style>

      {/* Fixed overlays */}
      <LaceFrame />
      <FallingPetals />

      {/* ── Navbar ── */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-dustyrose/30
                      bg-cream/95 backdrop-blur-sm sticky top-0 z-50">
        <img src={logo} alt="Letters and Lace" className="h-16" />
        <div className="flex gap-10 text-brown text-sm tracking-widest uppercase">
          {['/', '/about', '/products', '/reviews', '/order'].map((href, i) => (
            <a key={href} href={href}
               className="hover:text-dustyrose transition-colors">
              {['Home','About','Shop','Reviews','Order'][i]}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero-section">
        <HeroBgDecor />

        <p className="font-allura text-dustyrose text-2xl mb-4 tracking-wide fade-up"
           style={{ animationDelay:'.1s' }}>
          handcrafted with love
        </p>
        <h1 className="font-playfair text-brown text-6xl md:text-7xl italic leading-tight mb-6 fade-up"
            style={{ animationDelay:'.25s' }}>
          Where Memories<br />Become Heirlooms
        </h1>
        <p className="text-brown/60 text-lg max-w-md mb-10 leading-relaxed fade-up"
           style={{ animationDelay:'.4s' }}>
          Vintage scrapbooks, custom cards &amp; keepsake boxes — crafted softly, gifted forever.
          Delivering across Lahore. 🌸
        </p>
        <a href="/order"
           className="bg-brown text-cream px-10 py-4 font-playfair italic text-lg
                      hover:bg-burgundy transition-all duration-300 tracking-wide fade-up"
           style={{ animationDelay:'.55s', animation:'roseGlow 2.5s ease-in-out infinite, fadeUp .7s ease .55s forwards' }}>
          Place an Order ✉️
        </a>
      </section>

      {/* ── Divider ── */}
      <Divider />

      {/* ── Reviews Preview ── */}
      <section className="py-20 px-12 text-center">
        <p className="font-allura text-dustyrose text-xl mb-2">kind words</p>
        <h2 className="font-playfair text-brown text-4xl italic mb-4">
          What Our Customers Say
        </h2>
        <p className="text-brown/50 text-sm tracking-widest mb-12">real orders, real love 🌸</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-10">
          {[
            { name:"Maryam A.", text:"I cried when I opened my scrapbook. Every single detail was perfect. Will order again and again." },
            { name:"Zara K.",   text:"The anniversary card was absolutely gorgeous — so much more beautiful than anything I could find in a shop." },
            { name:"Hira S.",   text:"Ordered the mystery keepsake box as a gift and my friend was completely speechless. 10/10 🌸" },
          ].map((r) => (
            <div key={r.name}
                 className="bg-white/40 border border-dustyrose/30 p-8 relative
                            hover:border-dustyrose hover:shadow-lg transition-all duration-300 text-left">
              <span className="absolute top-4 right-5 text-gold/20 text-4xl font-playfair">"</span>
              <div className="flex gap-1 mb-3">
                {[1,2,3,4,5].map(s => <span key={s} className="text-gold text-lg">★</span>)}
              </div>
              <p className="text-brown/70 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-dustyrose/40"/>
                <p className="font-playfair text-brown text-sm">{r.name}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="/reviews"
           className="inline-block border border-dustyrose text-brown px-10 py-3 font-playfair italic
                      hover:bg-dustyrose/10 transition-all duration-300 tracking-wide text-sm">
          Read All Reviews &amp; Leave Yours ✦
        </a>
      </section>

      {/* ── Divider ── */}
      <Divider />

      {/* ── Products ── */}
      <section className="py-24 px-12 text-center">
        <p className="font-allura text-dustyrose text-xl mb-2">our offerings</p>
        <h2 className="font-playfair text-brown text-4xl italic mb-16">Crafted Just For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { title:"Scrapbooks",   desc:"Custom memory books with vintage textures, pressed flowers & love.", emoji:"📖", href:"/products#scrapbooks" },
            { title:"Custom Cards", desc:"Handcrafted cards for birthdays, anniversaries & every soft moment.", emoji:"✉️", href:"/products#cards"     },
            { title:"Gift Boxes",   desc:"Keepsake boxes wrapped in lace, ribbon & wax sealed with care.",    emoji:"🎀", href:"/products#bundles"   },
          ].map((item) => (
            <a key={item.title} href={item.href}
               className="bg-white/40 border border-dustyrose/30 p-10
                          hover:shadow-lg hover:border-dustyrose transition-all duration-300 block">
              <div className="text-5xl mb-4">{item.emoji}</div>
              <h3 className="font-playfair text-brown text-2xl italic mb-3">{item.title}</h3>
              <p className="text-brown/60 text-sm leading-relaxed">{item.desc}</p>
              <p className="text-dustyrose text-xs tracking-widest uppercase mt-4">View Collection →</p>
            </a>
          ))}
        </div>
      </section>

      {/* ── Instagram Banner ── */}
      <section className="py-20 px-6">
        <BeadStrand />
        <div className="max-w-3xl mx-auto relative overflow-hidden border border-dustyrose/40
                        bg-white/40 px-10 py-14 text-center">

          {/* Corner rose petals inside box */}
          <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', pointerEvents:'none' }}
               viewBox="0 0 760 340" preserveAspectRatio="xMidYMid slice"
               xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="30"  cy="30"  rx="14" ry="22" fill="#C9A89B" opacity="0.1" transform="rotate(-30 30 30)"/>
            <ellipse cx="50"  cy="20"  rx="10" ry="18" fill="#D4B5A8" opacity="0.09" transform="rotate(20 50 20)"/>
            <ellipse cx="730" cy="30"  rx="14" ry="22" fill="#C9A89B" opacity="0.1" transform="rotate(30 730 30)"/>
            <ellipse cx="710" cy="20"  rx="10" ry="18" fill="#D4B5A8" opacity="0.09" transform="rotate(-20 710 20)"/>
            <ellipse cx="30"  cy="310" rx="14" ry="22" fill="#C9A89B" opacity="0.1" transform="rotate(30 30 310)"/>
            <ellipse cx="730" cy="310" rx="14" ry="22" fill="#C9A89B" opacity="0.1" transform="rotate(-30 730 310)"/>
            <text x="18" y="170" fontSize="11" fill="#C6A75E" opacity="0.3">✦</text>
            <text x="735" y="170" fontSize="11" fill="#C6A75E" opacity="0.3">✦</text>
          </svg>

          <span className="absolute top-6 left-16 text-dustyrose opacity-10 text-8xl select-none">🌸</span>
          <span className="absolute top-10 right-16 text-dustyrose opacity-10 text-6xl select-none">🌸</span>
          <span className="absolute top-1/2 left-4 text-gold opacity-10 text-4xl select-none">✦</span>
          <span className="absolute top-1/2 right-4 text-gold opacity-10 text-4xl select-none">✦</span>

          <div className="flex items-center gap-3 justify-center mb-8 opacity-50">
            <div className="w-12 h-px bg-gold"/>
            <span className="text-gold text-xs">✦</span>
            <span className="text-gold text-base">✦</span>
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-px bg-gold"/>
          </div>

          <div className="w-16 h-16 mx-auto mb-6 border border-dustyrose/40
                          flex items-center justify-center bg-cream">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-dustyrose"
                 fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" fill="none"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" fill="none"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
            </svg>
          </div>

          <p className="font-allura text-dustyrose text-3xl mb-3">find us on instagram</p>
          <h2 className="font-playfair text-brown text-4xl italic mb-4">See Our Latest Work</h2>
          <p className="text-brown/50 text-sm leading-relaxed max-w-sm mx-auto mb-3">
            Behind the scenes, new arrivals, finished pieces &amp; all the little
            details — follow along on Instagram 🌸
          </p>
          <p className="font-playfair text-dustyrose italic text-lg mb-8 tracking-wide">
            @letters_and_laceofficial
          </p>

          <a href="https://www.instagram.com/letters_and_laceofficial"
             target="_blank" rel="noopener noreferrer"
             className="inline-block bg-brown text-cream px-10 py-4 font-playfair italic text-lg
                        hover:bg-burgundy transition-all duration-300 tracking-wide"
             style={{ animation:'roseGlow 2.5s ease-in-out infinite' }}>
            Follow Us ✦
          </a>

          <div className="flex items-center gap-3 justify-center mt-10 opacity-50">
            <div className="w-12 h-px bg-gold"/>
            <span className="text-gold text-xs">✦</span>
            <span className="text-gold text-base">✦</span>
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-px bg-gold"/>
          </div>
        </div>
        <BeadStrand flip />
      </section>

      {/* ── Footer ── */}
      <footer className="text-center py-10 border-t border-dustyrose/20 text-brown/40 text-sm tracking-widest">
        © 2026 Letters &amp; Lace — Lahore, Pakistan 🌙
      </footer>
    </div>
  )
}

/* ─────────────────────────────────────────────
   APP ROUTER
───────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<HomePage />}   />
        <Route path="/order"   element={<OrderPage />}  />
        <Route path="/about"   element={<AboutPage />}  />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
