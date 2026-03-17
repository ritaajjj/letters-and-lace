import { useState } from 'react'

// WITH THIS:
const initialReviews = [
  { name: "Maryam A.", rating: 5, review: "I cried when I opened my scrapbook. Every single detail was perfect. Will order again and again.", date: "January 1, 2026" },
  { name: "Zara K.", rating: 5, review: "The anniversary card was absolutely gorgeous — so much more beautiful than anything I could find in a shop.", date: "January 1, 2026" },
  { name: "Hira S.", rating: 5, review: "Ordered the mystery keepsake box as a gift and my friend was completely speechless. 10/10 🌸", date: "January 1, 2026" },
]
function StarRating({ value, onChange }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className={`text-2xl transition-colors ${value >= star ? 'text-gold' : 'text-brown/20'}`}>
          ★
        </button>
      ))}
    </div>
  )
}

function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews)
  const [form, setForm] = useState({ name: '', review: '', rating: 0 })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit() {
    if (!form.name || !form.review || form.rating === 0) {
      setError('Please fill in all fields and select a star rating 🌸')
      return
    }
    setError('')
    setReviews([{ ...form, date: new Date().toLocaleDateString('en-PK', { year: 'numeric', month: 'long', day: 'numeric' }) }, ...reviews])
    setForm({ name: '', review: '', rating: 0 })
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div className="min-h-screen bg-cream font-lora">
      <style>{`
        @keyframes roseGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(198, 167, 94, 0); }
          50% { box-shadow: 0 0 18px rgba(198, 167, 94, 0.5); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.5s ease forwards; }
      `}</style>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 border-b border-dustyrose/30">
        <a href="/" className="font-playfair text-brown text-xl italic">Letters & Lace</a>
        <div className="flex gap-10 text-brown text-sm tracking-widest uppercase">
          <a href="/" className="hover:text-dustyrose transition-colors">Home</a>
          <a href="/about" className="hover:text-dustyrose transition-colors">About</a>
          <a href="/products" className="hover:text-dustyrose transition-colors">Shop</a>
          <a href="/reviews" className="text-dustyrose">Reviews</a>
          <a href="/order" className="hover:text-dustyrose transition-colors">Order</a>
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

        <p className="font-allura text-dustyrose text-3xl mb-3">kind words</p>
        <h1 className="font-playfair text-brown text-5xl italic mb-4">
          What Our Customers Say
        </h1>
        <p className="text-brown/50 text-sm tracking-widest max-w-xs mx-auto mb-6">
          every review is a little love note back to us 🌸
        </p>

        <div className="flex items-center gap-3 justify-center opacity-50">
          <div className="w-16 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <span className="text-gold text-base">✦</span>
          <span className="text-gold text-xs">✦</span>
          <div className="w-16 h-px bg-gold"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24">

        {/* Leave a Review Form */}
        <div className="bg-white/40 border border-dustyrose/30 p-10 mb-16">
          <p className="font-allura text-dustyrose text-2xl mb-1">share your experience</p>
          <h2 className="font-playfair text-brown text-3xl italic mb-8">Leave a Review</h2>

          {submitted && (
            <div className="bg-dustyrose/20 border border-dustyrose/40 px-6 py-4 mb-6 fade-in text-center">
              <p className="font-playfair text-brown italic text-lg">Thank you for your kind words! 🌸</p>
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">Your Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-cream border border-dustyrose/40 px-4 py-3 text-brown
                placeholder-brown/30 focus:outline-none focus:border-dustyrose transition-colors"/>
            </div>

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">Your Rating *</label>
              <StarRating value={form.rating} onChange={(val) => setForm({ ...form, rating: val })} />
            </div>

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">Your Review *</label>
              <textarea
                value={form.review}
                onChange={(e) => setForm({ ...form, review: e.target.value })}
                rows={4}
                placeholder="Tell us about your experience — what did you order, how did it feel to receive it?"
                className="w-full bg-cream border border-dustyrose/40 px-4 py-3 text-brown
                placeholder-brown/30 focus:outline-none focus:border-dustyrose transition-colors resize-none"/>
            </div>

            {error && (
              <p className="text-dustyrose text-xs tracking-wide">{error}</p>
            )}

            <button
              type="button"
              onClick={handleSubmit}
              style={{ animation: 'roseGlow 2.5s ease-in-out infinite' }}
              className="w-full bg-brown text-cream py-4 font-playfair italic text-lg
              hover:bg-burgundy transition-all duration-300 tracking-wide">
              Submit Review ✦
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        {reviews.length === 0 ? (
          <div className="text-center py-20">
            <span className="text-5xl block mb-4">🌸</span>
            <p className="font-playfair text-brown/40 italic text-xl mb-2">No reviews yet</p>
            <p className="text-brown/30 text-sm tracking-widest">Be the first to leave one above!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <div key={i}
                className="bg-white/40 border border-dustyrose/30 p-8 relative fade-in
                hover:border-dustyrose hover:shadow-lg transition-all duration-300">
                <span className="absolute top-4 right-5 text-gold/20 text-4xl font-playfair">"</span>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className={`text-lg ${r.rating >= star ? 'text-gold' : 'text-brown/15'}`}>★</span>
                  ))}
                </div>
                <p className="text-brown/70 text-sm leading-relaxed mb-6 italic">"{r.review}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-dustyrose/40"></div>
                  <div>
                    <p className="font-playfair text-brown text-sm">{r.name}</p>
                    <p className="text-brown/30 text-xs tracking-widest">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer className="text-center py-10 border-t border-dustyrose/20 text-brown/40 text-sm tracking-widest">
        © 2026 Letters & Lace — Lahore, Pakistan 🌙
      </footer>
    </div>
  )
}

export default ReviewsPage