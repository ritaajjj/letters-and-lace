function ProductsPage() {
  return (
    <div className="min-h-screen bg-cream font-lora">
      <style>{`
        @keyframes roseGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(198, 167, 94, 0); }
          50% { box-shadow: 0 0 18px rgba(198, 167, 94, 0.5); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .shimmer { animation: shimmer 3s ease-in-out infinite; }
      `}</style>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-dustyrose/30">
        <a href="/" className="font-playfair text-brown text-xl italic">Letters & Lace</a>
        <div className="flex gap-10 text-brown text-sm tracking-widest uppercase">
          <a href="/" className="hover:text-dustyrose transition-colors">Home</a>
          <a href="/about" className="hover:text-dustyrose transition-colors">About</a>
          <a href="/products" className="text-dustyrose">Shop</a>
          <a href="/order" className="hover:text-dustyrose transition-colors">Order</a>
          <a href="/reviews" className="hover:text-dustyrose transition-colors">Reviews</a>
        </div>
      </nav>

      {/* Page Header */}
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

        <p className="font-allura text-dustyrose text-3xl mb-3">our collection</p>
        <h1 className="font-playfair text-brown text-5xl italic mb-4">
          Handcrafted With Love
        </h1>
        <p className="text-brown/50 text-sm tracking-widest max-w-xs mx-auto mb-6">
          every piece made by hand, just for you 🌸
        </p>

        <div className="flex items-center gap-3 justify-center opacity-50">
          <div className="w-16 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <span className="text-gold text-base">✦</span>
          <span className="text-gold text-xs">✦</span>
          <div className="w-16 h-px bg-gold"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-24">

        {/* SCRAPBOOKS */}
        <section id="scrapbooks" className="scroll-mt-10">
          <div className="flex items-center gap-4 mb-10 opacity-60">
            <div className="flex-1 h-px bg-dustyrose"></div>
            <span className="font-allura text-dustyrose text-2xl">Scrapbooks</span>
            <div className="flex-1 h-px bg-dustyrose"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Memory Scrapbook", desc: "A deeply personal keepsake filled with your favourite photos, handwritten notes & pressed florals. Perfect for birthdays, anniversaries or just because.", price: "Starting from Rs. 4,000" },
              { name: "Travel Journal Book", desc: "Document every adventure — tickets, maps, polaroids & memories all in one beautifully bound vintage book.", price: "Starting from Rs. 4,000" },
              { name: "Couple's Scrapbook", desc: "A love story in pages. Timelines, first dates, favourite quotes & all your little moments together.", price: "Starting from Rs. 4,000" },
            ].map((item) => (
              <div key={item.name}
                className="bg-white/40 border border-dustyrose/30 hover:border-dustyrose
                hover:shadow-lg transition-all duration-300 flex flex-col">
                <div className="bg-dustyrose/10 border-b border-dustyrose/20 h-48
                flex flex-col items-center justify-center text-center px-4">
                  <span className="text-4xl mb-2">📖</span>
                  <p className="text-brown/30 text-xs tracking-widest uppercase">photo coming soon</p>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-playfair text-brown text-xl italic mb-2">{item.name}</h3>
                  <p className="text-brown/60 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
                  <p className="text-dustyrose text-sm tracking-wide mb-4 font-playfair italic">{item.price}</p>
                  <a href="/order"
                    style={{ animation: 'roseGlow 2.5s ease-in-out infinite' }}
                    className="block text-center bg-brown text-cream py-3 font-playfair italic
                    hover:bg-burgundy transition-all duration-300 text-sm tracking-wide">
                    Order Now ✉️
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

     {/* Product Showcase */}
<section className="py-24 px-8 text-center">
  <p className="font-allura text-dustyrose text-xl mb-2">our offerings</p>
  <h2 className="font-playfair text-brown text-4xl italic mb-4">Crafted Just For You</h2>
  <p className="text-brown/50 text-sm tracking-widest max-w-sm mx-auto mb-16">
    every piece is made by hand, with intention and love 🌸
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

    {/* Card 1 — Custom Cards */}
    <div className="group relative overflow-hidden border border-dustyrose/30 
    hover:border-dustyrose transition-all duration-500 cursor-pointer">

      {/* Image placeholder */}
      <div className="relative h-72 bg-dustyrose/20 overflow-hidden flex items-center 
      justify-center transition-all duration-500 group-hover:bg-dustyrose/30">
        <div className="text-center">
          <div className="text-7xl mb-3 group-hover:scale-110 transition-transform duration-500">✉️</div>
          <p className="text-brown/30 text-xs tracking-widest uppercase">photo coming soon</p>
        </div>
        {/* Corner gold accent */}
        <span className="absolute top-3 right-3 text-gold opacity-40 text-lg">✦</span>
        <span className="absolute bottom-3 left-3 text-gold opacity-40 text-sm">✦</span>
      </div>

      {/* Content */}
      <div className="p-7 bg-white/40 text-left">
        <p className="font-allura text-dustyrose text-lg mb-1">handcrafted</p>
        <h3 className="font-playfair text-brown text-2xl italic mb-3">Custom Cards</h3>
        <p className="text-brown/60 text-sm leading-relaxed mb-5">
          Birthdays, anniversaries, eid, or just because — 
          every card is made by hand, never printed.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-brown/40 text-xs tracking-widest uppercase">Starting from</span>
          <span className="font-playfair text-brown italic text-lg">Rs. 350 ✦</span>
        </div>
      </div>
    </div>

    {/* Card 2 — Scrapbooks (featured, slightly taller) */}
    <div className="group relative overflow-hidden border border-dustyrose/30 
    hover:border-dustyrose transition-all duration-500 cursor-pointer md:-mt-6">

      {/* Featured badge */}
      <div className="absolute top-4 left-4 z-10 bg-brown text-cream 
      text-xs tracking-widest uppercase px-3 py-1 font-lora">
        most loved
      </div>

      <div className="relative h-80 bg-dustyrose/20 overflow-hidden flex items-center 
      justify-center transition-all duration-500 group-hover:bg-dustyrose/30">
        <div className="text-center">
          <div className="text-7xl mb-3 group-hover:scale-110 transition-transform duration-500">📖</div>
          <p className="text-brown/30 text-xs tracking-widest uppercase">photo coming soon</p>
        </div>
        <span className="absolute top-3 right-3 text-gold opacity-40 text-lg">✦</span>
        <span className="absolute bottom-3 left-3 text-gold opacity-40 text-sm">✦</span>
      </div>

      <div className="p-7 bg-white/50 text-left">
        <p className="font-allura text-dustyrose text-lg mb-1">a keepsake forever</p>
        <h3 className="font-playfair text-brown text-2xl italic mb-3">Scrapbooks</h3>
        <p className="text-brown/60 text-sm leading-relaxed mb-5">
          Vintage textures, pressed flowers, washi tape & love — 
          custom memory books you'll treasure for years.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-brown/40 text-xs tracking-widest uppercase">Starting from</span>
          <span className="font-playfair text-brown italic text-lg">Rs. 1,500 ✦</span>
        </div>
      </div>
    </div>

    {/* Card 3 — Surprise Bundles */}
    <div className="group relative overflow-hidden border border-dustyrose/30 
    hover:border-dustyrose transition-all duration-500 cursor-pointer">

      <div className="relative h-72 bg-dustyrose/20 overflow-hidden flex items-center 
      justify-center transition-all duration-500 group-hover:bg-dustyrose/30">
        <div className="text-center">
          <div className="text-7xl mb-3 group-hover:scale-110 transition-transform duration-500">✨</div>
          <p className="text-brown/30 text-xs tracking-widest uppercase">photo coming soon</p>
        </div>
        <span className="absolute top-3 right-3 text-gold opacity-40 text-lg">✦</span>
        <span className="absolute bottom-3 left-3 text-gold opacity-40 text-sm">✦</span>
      </div>

      <div className="p-7 bg-white/40 text-left">
        <p className="font-allura text-dustyrose text-lg mb-1">curated with care</p>
        <h3 className="font-playfair text-brown text-2xl italic mb-3">Surprise Bundles</h3>
        <p className="text-brown/60 text-sm leading-relaxed mb-5">
          Let us choose for you — a curated set of our most 
          loved pieces, wrapped & sealed with a wax stamp.
        </p>
        <div className="flex items-center justify-between">
          <span className="text-brown/40 text-xs tracking-widest uppercase">Starting from</span>
          <span className="font-playfair text-brown italic text-lg">Rs. 2,000 ✦</span>
        </div>
      </div>
    </div>

  </div>

  {/* CTA below showcase */}
  <div className="mt-16">
    <p className="text-brown/40 text-sm tracking-widest mb-6">
      — all pieces are fully customisable —
    </p>
    <a href="/order"
      className="bg-brown text-cream px-10 py-4 font-playfair italic text-lg
      hover:bg-burgundy transition-all duration-300 tracking-wide">
      Order Yours Now ✉️
    </a>
  </div>
</section>
        {/* SPECIAL EDITIONS */}
        <section id="special" className="scroll-mt-10">
          <div className="flex items-center gap-4 mb-4 opacity-60">
            <div className="flex-1 h-px bg-gold"></div>
            <span className="font-allura text-gold text-2xl">Special Editions</span>
            <div className="flex-1 h-px bg-gold"></div>
          </div>

          {/* Section intro */}
          <p className="text-center text-brown/50 text-sm tracking-widest mb-10 italic">
            rare & limited pieces — arriving when the time is right 🕰️
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "The Vintage Letter Box",
                desc: "A curated box of vintage-style handwritten letters, wax seals, aged paper & keepsake trinkets — like receiving a letter from another era.",
                teaser: "Our most anticipated piece. Coming once we're ready to do it justice. 🌙",
                emoji: "🕰️",
              },
              {
                name: "Heirloom Scrapbook",
                desc: "An elaborately bound, gold-embossed memory book with hand-stitched pages, pressed botanicals & archival materials meant to last generations.",
                teaser: "A truly once-in-a-lifetime keepsake. Coming soon.",
                emoji: "📜",
              },
              {
                name: "The Love Letter Set",
                desc: "12 hand-penned romantic letters, sealed in individual wax envelopes, presented in a ribbon-tied box — one letter for every month of the year.",
                teaser: "For the ones who believe in slow love. Dropping soon. 💌",
                emoji: "💌",
              },
            ].map((item) => (
              <div key={item.name}
                className="relative border border-gold/30 flex flex-col overflow-hidden"
                style={{ background: 'rgba(255,255,255,0.25)' }}>

                {/* Locked overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center
                  bg-cream/80 backdrop-blur-[2px]">
                  <span className="text-3xl mb-2 shimmer">🔒</span>
                  <span className="font-playfair text-brown/70 italic text-sm tracking-wide mb-1">Coming Soon</span>
                  <div className="w-8 h-px bg-gold/50 my-2"></div>
                  <p className="text-brown/50 text-xs text-center px-6 leading-relaxed">{item.teaser}</p>
                </div>

                {/* Card content behind blur */}
                <div className="bg-gold/10 border-b border-gold/20 h-48
                  flex flex-col items-center justify-center text-center px-4 opacity-40">
                  <span className="text-4xl mb-2">{item.emoji}</span>
                  <p className="text-brown/30 text-xs tracking-widest uppercase">special edition</p>
                </div>
                <div className="p-6 flex flex-col flex-1 opacity-40">
                  <h3 className="font-playfair text-brown text-xl italic mb-2">{item.name}</h3>
                  <p className="text-brown/60 text-sm leading-relaxed mb-4 flex-1">{item.desc}</p>
                  <p className="text-gold text-sm tracking-wide mb-4 font-playfair italic">Price TBA</p>
                  <div className="block text-center bg-brown/50 text-cream py-3 font-playfair italic text-sm">
                    Locked 🔒
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center bg-white/30 border border-gold/20 px-8 py-6 max-w-lg mx-auto">
            <span className="text-gold shimmer text-2xl block mb-3">✦</span>
            <p className="font-playfair text-brown italic text-lg mb-2">
              Something beautiful is coming.
            </p>
            <p className="text-brown/50 text-sm leading-relaxed">
              Special Editions will be released as Letters & Lace grows.
              Each piece will be limited, intentional & worth the wait. 🌙
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="text-center py-10 border-t border-dustyrose/20 text-brown/40 text-sm tracking-widest">
        © 2026 Letters & Lace — Lahore, Pakistan 🌙
      </footer>
    </div>
  )
}

export default ProductsPage