import { useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = 'service_lqq2c9w'
const EMAILJS_TEMPLATE_ID = 'template_wxr9dwn'
const EMAILJS_PUBLIC_KEY  = 'SYmK1okzAc0mT-MBW'

const JAZZCASH_NUMBER = '0308-8469993'

function OrderPage() {
  const [form, setForm] = useState({
    name: '', phone: '', address: '',
    product: '', message: '', payment: ''
  })
  const [step, setStep] = useState('form')
  const [loading, setLoading] = useState(false)
  const [screenshot, setScreenshot] = useState(null)
  const [screenshotError, setScreenshotError] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit() {
    if (!form.name || !form.phone || !form.address || !form.product || !form.payment) {
      alert('Please fill in all required fields 🌸')
      return
    }
    if (form.payment === 'JazzCash') {
      setStep('jazzcash')
      return
    }
    await sendEmail()
  }

  async function handleJazzCashDone() {
    if (!screenshot) {
      setScreenshotError(true)
      return
    }
    setScreenshotError(false)
    await sendEmail()
  }

  async function sendEmail() {
    setLoading(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          phone:     form.phone,
          address:   form.address,
          product:   form.product,
          payment:   form.payment,
          message:   form.message || 'No special instructions',
        },
        EMAILJS_PUBLIC_KEY
      )
      setStep('done')
    } catch (err) {
      alert('Error: ' + JSON.stringify(err))
      console.error(err)
    }
    setLoading(false)
  }

  // ✅ SUCCESS SCREEN
  if (step === 'done') return (
    <div className="min-h-screen bg-cream font-lora flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-6">🌸</div>
        <h2 className="font-playfair text-brown text-4xl italic mb-4">
          Order Received!
        </h2>
        <p className="text-brown/60 leading-relaxed mb-8">
          Thank you, <span className="text-brown font-semibold">{form.name}</span>!
          We've received your order and will confirm via email shortly.
          Can't wait to craft something beautiful for you 💌
        </p>
        <a href="/"
          className="bg-brown text-cream px-8 py-3 font-playfair italic text-lg
          hover:bg-burgundy transition-all duration-300">
          Back to Home ✦
        </a>
      </div>
    </div>
  )

  // 💛 JAZZCASH PAYMENT SCREEN
  if (step === 'jazzcash') return (
    <div className="min-h-screen bg-cream font-lora flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white/40 border border-dustyrose/30 p-10 text-center">
        <div className="text-5xl mb-4">💛</div>
        <h2 className="font-playfair text-brown text-3xl italic mb-2">
          Send Payment via JazzCash
        </h2>
        <p className="text-brown/50 text-sm mb-8">
          Please send your payment to the number below, then upload your screenshot.
        </p>

        <div className="bg-cream border-2 border-gold/60 px-6 py-5 mb-4">
          <p className="text-brown/50 text-xs tracking-widest uppercase mb-1">JazzCash Number</p>
          <p className="font-playfair text-brown text-3xl tracking-widest">{JAZZCASH_NUMBER}</p>
          <p className="text-brown/40 text-xs mt-1">Letters & Lace</p>
        </div>

        <div className="bg-dustyrose/20 border border-dustyrose/30 px-5 py-3 mb-6 text-left">
          <p className="text-brown/60 text-xs leading-relaxed">
            1. Open your JazzCash app<br/>
            2. Send payment to the number above<br/>
            3. Take a screenshot of the confirmation<br/>
            4. Upload it below & click confirm 🌸
          </p>
        </div>

        <div className="mb-6">
          <label className="block text-brown text-sm tracking-widest uppercase mb-2 text-left">
            Payment Screenshot *
          </label>
          <label className={`flex flex-col items-center justify-center w-full h-36 
            border-2 border-dashed cursor-pointer transition-colors
            ${screenshot ? 'border-dustyrose bg-dustyrose/10' : 'border-dustyrose/40 hover:border-dustyrose bg-cream'}`}>
            {screenshot ? (
              <div className="text-center px-4">
                <div className="text-3xl mb-2">✅</div>
                <p className="text-brown text-sm font-playfair italic">{screenshot.name}</p>
                <p className="text-brown/40 text-xs mt-1">tap to change</p>
              </div>
            ) : (
              <div className="text-center px-4">
                <div className="text-3xl mb-2">📸</div>
                <p className="text-brown/60 text-sm">Tap to upload screenshot</p>
                <p className="text-brown/30 text-xs mt-1">JPG, PNG supported</p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setScreenshot(e.target.files[0])}
            />
          </label>
        </div>

        {screenshotError && (
          <p className="text-red-400 text-xs mb-4 tracking-wide">
            Please upload your payment screenshot to continue 🌸
          </p>
        )}

        <button
          onClick={handleJazzCashDone}
          disabled={loading}
          className="w-full bg-brown text-cream py-4 font-playfair italic text-lg
          hover:bg-burgundy transition-all duration-300 mb-3">
          {loading ? 'Confirming...' : "I've Sent the Payment ✉️"}
        </button>

        <button
          onClick={() => setStep('form')}
          className="text-brown/40 text-sm hover:text-brown transition-colors">
          ← Go back
        </button>
      </div>
    </div>
  )

  // 📋 MAIN ORDER FORM
  return (
    <div className="min-h-screen bg-cream font-lora">
      <style>{`
        @keyframes roseGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(198, 167, 94, 0); }
          50% { box-shadow: 0 0 18px rgba(198, 167, 94, 0.5); }
        }
      `}</style>

      <nav className="flex justify-between items-center px-12 py-6 border-b border-dustyrose/30">
        <a href="/" className="font-playfair text-brown text-xl italic">Letters & Lace</a>
        <div className="flex gap-10 text-brown text-sm tracking-widest uppercase">
          <a href="/" className="hover:text-dustyrose transition-colors">Home</a>
          <a href="/about" className="hover:text-dustyrose transition-colors">About</a>
          <a href="/order" className="text-dustyrose">Order</a>
        </div>
      </nav>

      {/* Vintage Banner Header */}
      <div className="relative text-center pt-16 pb-10 px-6 overflow-hidden">
        <span className="absolute top-6 left-16 text-dustyrose opacity-10 text-8xl select-none">🌸</span>
        <span className="absolute top-10 right-16 text-dustyrose opacity-10 text-6xl select-none">🌸</span>
        <span className="absolute bottom-4 left-1/3 text-dustyrose opacity-10 text-5xl select-none">🌸</span>

        <div className="flex items-center gap-3 justify-center mb-6 opacity-50">
          <div className="w-16 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <div className="w-6 h-px bg-gold"></div>
          <span className="text-gold text-base">✦</span>
          <div className="w-6 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <div className="w-16 h-px bg-gold"></div>
        </div>

        <p className="font-allura text-dustyrose text-3xl mb-3 tracking-wide">place your order</p>
        <h1 className="font-playfair text-brown text-5xl italic leading-snug mb-3">
          Let's Create Something<br/>Beautiful
        </h1>
        <p className="text-brown/50 text-sm tracking-widest max-w-xs mx-auto mb-6">
          handcrafted in lahore, made with love 🌸
        </p>

        <div className="flex items-center gap-3 justify-center opacity-50">
          <div className="w-16 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <div className="w-6 h-px bg-gold"></div>
          <span className="text-gold text-base">✦</span>
          <div className="w-6 h-px bg-gold"></div>
          <span className="text-gold text-xs">✦</span>
          <div className="w-16 h-px bg-gold"></div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-24">
        <div className="bg-white/40 border border-dustyrose/30 p-10">
          <div className="space-y-6">

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">Full Name *</label>
              <input name="name" value={form.name} onChange={handleChange}
                type="text" placeholder="Your name"
                className="w-full bg-cream border border-dustyrose/40 px-4 py-3 text-brown
                placeholder-brown/30 focus:outline-none focus:border-dustyrose transition-colors"/>
            </div>

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">Phone Number *</label>
              <input name="phone" value={form.phone} onChange={handleChange}
                type="tel" placeholder="03XX-XXXXXXX"
                className="w-full bg-cream border border-dustyrose/40 px-4 py-3 text-brown
                placeholder-brown/30 focus:outline-none focus:border-dustyrose transition-colors"/>
            </div>

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">Delivery Address — Lahore *</label>
              <textarea name="address" value={form.address} onChange={handleChange}
                rows={3} placeholder="Street, area, landmark..."
                className="w-full bg-cream border border-dustyrose/40 px-4 py-3 text-brown
                placeholder-brown/30 focus:outline-none focus:border-dustyrose transition-colors resize-none"/>
            </div>

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">What would you like? *</label>
              <select name="product" value={form.product} onChange={handleChange}
                className="w-full bg-cream border border-dustyrose/40 px-4 py-3 text-brown
                focus:outline-none focus:border-dustyrose transition-colors">
                <option value="" disabled>Choose a product...</option>
                <option value="Scrapbook">📖 Scrapbook</option>
                <option value="Custom Card">✉️ Custom Card</option>
                <option value="Gift Box">🎀 Gift Box</option>
                <option value="Surprise Bundle">✨ Surprise Bundle</option>
              </select>
            </div>

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-2">Custom Message / Instructions</label>
              <textarea name="message" value={form.message} onChange={handleChange}
                rows={4} placeholder="Tell us the occasion, names, colours, or any special requests..."
                className="w-full bg-cream border border-dustyrose/40 px-4 py-3 text-brown
                placeholder-brown/30 focus:outline-none focus:border-dustyrose transition-colors resize-none"/>
            </div>

            <div>
              <label className="block text-brown text-sm tracking-widest uppercase mb-3">Payment Method *</label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center gap-3 border px-4 py-3 cursor-pointer transition-colors
                  ${form.payment === 'JazzCash' ? 'border-dustyrose bg-dustyrose/10' : 'border-dustyrose/40 hover:border-dustyrose'}`}>
                  <input type="radio" name="payment" value="JazzCash" onChange={handleChange} className="accent-dustyrose"/>
                  <span className="text-brown text-sm">💛 JazzCash</span>
                </label>
                <label className={`flex items-center gap-3 border px-4 py-3 cursor-pointer transition-colors
                  ${form.payment === 'Card' ? 'border-dustyrose bg-dustyrose/10' : 'border-dustyrose/40 hover:border-dustyrose'}`}>
                  <input type="radio" name="payment" value="Card" onChange={handleChange} className="accent-dustyrose"/>
                  <span className="text-brown text-sm">💳 Card Payment</span>
                </label>
              </div>
              {form.payment === 'Card' && (
                <p className="text-brown/50 text-xs mt-3 tracking-wide">
                  💳 Card payment details will be shared via email after order confirmation.
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              style={{
                animation: loading ? 'none' : 'roseGlow 2.5s ease-in-out infinite',
              }}
              className="w-full bg-brown text-cream py-4 font-playfair italic text-lg
              hover:bg-burgundy transition-all duration-300 tracking-wide mt-4">
              {loading ? 'Sending... 🌸' : 'Send My Order ✉️'}
            </button>

          </div>

          <p className="text-center text-brown/40 text-xs tracking-widest mt-6">
            We'll confirm your order via email within 24 hours 🌸
          </p>
        </div>
      </div>

      <footer className="text-center py-10 border-t border-dustyrose/20 text-brown/40 text-sm tracking-widest">
        © 2026 Letters & Lace — Lahore, Pakistan 🌙
      </footer>
    </div>
  )
}

export default OrderPage