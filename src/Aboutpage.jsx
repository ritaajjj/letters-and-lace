function AboutPage() {
  return (
    <div className="min-h-screen bg-cream font-lora">

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s ease forwards; }
        .fade-up-2 { animation: fadeUp 0.9s ease 0.2s forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.9s ease 0.4s forwards; opacity: 0; }
      `}</style>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-dustyrose/30">
        <a href="/" className="font-playfair text-brown text-xl italic">Letters & Lace</a>
        <div className="flex gap-10 text-brown text-sm tracking-widest uppercase">
          <a href="/" className="hover:text-dustyrose transition-colors">Home</a>
          <a href="/about" className="text-dustyrose">About</a>
          <a href="/order" className="hover:text-dustyrose transition-colors">Order</a>
          <a href="/products" className="hover:text-dustyrose transition-colors">Shop</a>
        </div>
      </nav>

      {/* Header */}
      <div className="relative text-center pt-16 pb-10 px-6 overflow-hidden">
        <span className="absolute top-6 left-16 text-dustyrose opacity-10 text-8xl select-none">🌸</span>
        <span className="absolute top-10 right-16 text-dustyrose opacity-10 text-6xl select-none">🌸</span>

        <div className="flex items-center gap-3 justify-center mb-6 opacity-50">
          <div className="w-16 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <span className="text-gold text-base">✦</span>
          <span className="text-gold text-xs">✦</span>
          <div className="w-16 h-px bg-gold"></div>
        </div>

        <p className="font-allura text-dustyrose text-3xl mb-3 fade-up">our story</p>
        <h1 className="font-playfair text-brown text-5xl italic mb-4 fade-up-2">
          Made With Love,<br/>
        </h1>

        <div className="flex items-center gap-3 justify-center opacity-50">
          <div className="w-16 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <span className="text-gold text-base">✦</span>
          <span className="text-gold text-xs">✦</span>
          <div className="w-16 h-px bg-gold"></div>
        </div>
      </div>

      {/* Letter section */}
      <div className="max-w-2xl mx-auto px-6 pb-16 fade-up-3">
        <div className="bg-white/50 border border-dustyrose/30 p-10 relative">

          {/* Letter corner decoration */}
          <span className="absolute top-4 right-5 text-gold opacity-30 text-2xl">✦</span>
          <span className="absolute bottom-4 left-5 text-gold opacity-30 text-xl">✦</span>

          <p className="font-allura text-dustyrose text-2xl mb-6">Dear friend,</p>

          <div className="space-y-5 text-brown/70 leading-relaxed text-[15px]">
            <p>
              Letters & Lace was born from a quiet love for things made slowly — 
              for the kind of gifts that feel like a warm hug, that someone will 
              tuck away in a drawer and find years later, still smiling.
            </p>
            <p>
              It started simply: making scrapbooks for people I loved, pressing 
              flowers between pages, writing little notes in the margins. 
              Friends began asking if I could make one for them too — 
              and that's how this little corner of the world began. 🌸
            </p>
            <p>
              Every piece we create is handcrafted with intention. 
              No two are ever exactly alike. We believe the best gifts 
              aren't bought — they're <span className="font-playfair italic text-brown">felt</span>.
            </p>
          </div>

          <div className="my-8 flex items-center gap-4 opacity-30">
            <div className="flex-1 h-px bg-dustyrose"></div>
            <span className="text-gold">✦</span>
            <div className="flex-1 h-px bg-dustyrose"></div>
          </div>

          {/* Photo placeholder */}
          <div className="bg-dustyrose/10 border border-dustyrose/30 h-64 flex flex-col 
          items-center justify-center mb-8 text-center px-6">
            <span className="text-4xl mb-3">🌸</span>
            <p className="text-brown/40 text-sm tracking-widest uppercase">Your photo here</p>
            <p className="text-brown/30 text-xs mt-1">Drop your image in src/assets and I'll help you add it!</p>
          </div>

          {/* Values */}
          <p className="font-playfair text-brown text-2xl italic text-center mb-8">
            What we believe in
          </p>

          <div className="grid grid-cols-1 gap-5">
            {[
              { icon: "🤍", title: "Handmade with care", desc: "Every stitch, every fold, every pressed petal placed by hand — never rushed, never mass produced." },
              { icon: "🕰️", title: "Vintage at heart", desc: "We love the worn, the weathered, the beautiful things that feel like they carry a story already." },
              { icon: "💌", title: "Made to be felt", desc: "We don't just make pretty things. We make keepsakes — gifts that carry emotion long after the moment has passed." },
            ].map((v) => (
              <div key={v.title} className="flex gap-5 items-start p-5 
              border border-dustyrose/20 hover:border-dustyrose/50 transition-colors">
                <span className="text-3xl mt-1">{v.icon}</span>
                <div>
                  <h3 className="font-playfair text-brown text-lg italic mb-1">{v.title}</h3>
                  <p className="text-brown/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="my-8 flex items-center gap-4 opacity-30">
            <div className="flex-1 h-px bg-dustyrose"></div>
            <span className="text-gold">✦</span>
            <div className="flex-1 h-px bg-dustyrose"></div>
          </div>

          <p className="font-allura text-dustyrose text-2xl text-right">
            with love, Letters & Lace 🌸
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="/order"
            className="bg-brown text-cream px-10 py-4 font-playfair italic text-lg
            hover:bg-burgundy transition-all duration-300 tracking-wide"
            style={{ animation: 'roseGlow 2.5s ease-in-out infinite' }}>
            Order Something Beautiful ✉️
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-dustyrose/20 text-brown/40 text-sm tracking-widest">
        © 2026 Letters & Lace — Lahore, Pakistan 🌙
      </footer>

    </div>
  )
}

export default AboutPage