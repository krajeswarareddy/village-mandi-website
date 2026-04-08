import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const WA = `https://wa.me/916302984074`

const HERO_DISHES = [
  { emoji: '🍗', name: 'Chicken Mandi',   desc: 'Slow-cooked aromatic rice & tender chicken' },
  { emoji: '🥩', name: 'Mutton Mandi',    desc: 'Succulent mutton on fragrant Mandi rice' },
  { emoji: '🍚', name: 'Biryani',         desc: 'Hyderabadi dum biryani, the classic way' },
  { emoji: '🔥', name: 'Kebabs & Starters', desc: 'Tandoor-fresh kebabs straight off the flame' },
]

const FEATURES = [
  { icon: '🚫', title: 'No Swiggy / Zomato', desc: 'Order directly — you pay restaurant price, not platform price' },
  { icon: '📲', title: 'WhatsApp Order', desc: 'Simple, instant ordering on WhatsApp. No app needed.' },
  { icon: '🌿', title: 'Village Recipes', desc: 'Traditional cooking methods passed down generations' },
  { icon: '🏆', title: 'Group Platters', desc: 'Special platters for 4-6 people — perfect for family meals' },
]

export default function Home() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('slide-up') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      {/* HERO */}
      <section
  className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20"
  style={{
    background: 'linear-gradient(170deg, #1a0e03 0%, #2d1a05 40%, #1a2d05 100%)',
    overflow: 'hidden'
  }}
      >
  {/* 🔥 ADD THIS GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,199,44,0.15),transparent_70%)]"></div>
        {/* Decorative grain overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4a017\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />

        {/* Floating leaves */}
        {['🌾','🌿','🍃'].map((l, i) => (
          <span key={i} className="absolute text-3xl opacity-30 leaf-sway" style={{
            top: `${20 + i * 25}%`,
            left: i % 2 === 0 ? `${5 + i * 3}%` : `${85 - i * 3}%`,
            animationDelay: `${i * 0.5}s`
          }}>{l}</span>
        ))}

        <div className="relative z-10 max-w-3xl">
          <div className="inline-block bg-village-amber bg-opacity-20 border border-village-gold border-opacity-30 text-village-gold text-xs font-bold tracking-widest uppercase px-4 py-1 rounded-full mb-6">
            🚀 Direct Order • No Commission • Best Price
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-black text-white mb-3 leading-tight">
  The Village Mandi
          </h1>

          <p className="text-[#FFC72C] font-semibold text-lg md:text-xl mb-2">
  Authentic Mandi Experience in Dulapally
          </p>
          <p className="text-village-sand text-base md:text-lg opacity-80 mb-6 max-w-xl mx-auto">
  A simple and memorable way to order your favorite mandi — directly from us.
</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-village-sand opacity-70 mb-8">
  <span>⭐ 4.5+ Rating</span>
  <span>📍 Dulapally</span>
  <span>⚡ Instant WhatsApp Orders</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/order"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold text-lg px-8 py-4 rounded-full 
hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.5)] 
transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.133 1.545 5.862L0 24l6.342-1.512A11.927 11.927 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.988-1.364l-.358-.213-3.764.898.928-3.668-.233-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Order on WhatsApp
            </Link>
            <Link to="/menu"
              className="flex items-center justify-center gap-2 border-2 border-village-gold text-village-gold hover:bg-village-gold hover:text-village-darkbrown font-bold text-lg px-8 py-4 rounded-full transition-all"
            >
              📋 View Full Menu
            </Link>
          </div>

          <p className="text-village-sand text-sm opacity-50 mt-4">No app download needed · Direct WhatsApp ordering</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-village-sand text-xs tracking-widest uppercase">Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-village-gold animate-bounce">
            <path d="M7 10l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* WHY ORDER DIRECTLY */}
      <section className="py-16 px-4" style={{ background: '#f5f0e8' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-village-darkbrown mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
              Why Order Directly?
            </h2>
            <div className="divider-leaf" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <div key={i} className="reveal opacity-0 bg-white rounded-2xl p-6 text-center shadow-sm border border-village-sand hover:shadow-md transition-all" style={{ animationDelay: `${i*0.1}s` }}>
                <div className="text-4xl mb-3">{f.icon}</div>
                <h3 className="font-bold text-village-brown text-base mb-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED DISHES */}
      <section className="py-16 px-4" style={{ background: '#2d1a05' }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-village-gold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
              Our Specialties
            </h2>
            <div className="divider-leaf" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HERO_DISHES.map((d, i) => (
              <Link to="/menu" key={i}
                className="reveal opacity-0 bg-village-darkbrown rounded-2xl p-6 text-center border border-village-amber border-opacity-20 hover:border-village-gold transition-all menu-card"
                style={{ animationDelay: `${i*0.1}s` }}
              >
                <div className="text-5xl mb-4">{d.emoji}</div>
                <h3 className="text-village-gold font-bold text-lg mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>{d.name}</h3>
                <p className="text-village-sand text-sm opacity-70">{d.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/menu"
              className="inline-block border-2 border-village-gold text-village-gold hover:bg-village-gold hover:text-village-darkbrown font-bold px-8 py-3 rounded-full transition-all"
            >View Full Menu →</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-14 px-4 text-center" style={{ background: 'linear-gradient(135deg,#c8722a,#d4a017)' }}>
        <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
  Skip Swiggy & Save More on Every Order
        </h2>
        <p className="text-white opacity-90 mb-6 max-w-lg mx-auto">
          Order directly on WhatsApp and avoid 20% commission charges.  
          Get better prices and faster service — straight from our kitchen.
        </p>
        <a href={WA} target="_blank" rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white text-green-700 font-black text-xl px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.133 1.545 5.862L0 24l6.342-1.512A11.927 11.927 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.988-1.364l-.358-.213-3.764.898.928-3.668-.233-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
          </svg>
          Chat on WhatsApp
        </a>
        <p className="text-white opacity-70 text-sm mt-3">📞 6302984074</p>
      </section>
    </div>
  )
}
