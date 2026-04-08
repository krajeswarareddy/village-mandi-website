import { Link } from 'react-router-dom'

const TEAM_VALUES = [
  { icon: '🌾', title: 'Farm-Fresh Ingredients', desc: 'We source the freshest spices and produce for every dish we make.' },
  { icon: '🔥', title: 'Traditional Cooking', desc: 'Every mandi is slow-cooked the authentic way — no shortcuts, ever.' },
  { icon: '💚', title: 'No Hidden Costs', desc: 'We left Swiggy & Zomato so you pay fair prices. Direct is better.' },
  { icon: '🏡', title: 'Village Hospitality', desc: 'We treat every customer like family. That\'s the village way.' },
]

export default function About() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f0e8', paddingTop: 72 }}>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(160deg,#1a0e03,#2d1a05,#1a2d05)' }} className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {['🌾','🌿','🍃','🌾','🌿'].map((l, i) => (
            <span key={i} className="absolute text-4xl leaf-sway" style={{
              top: `${10 + i * 18}%`, left: `${5 + i * 20}%`,
              animationDelay: `${i * 0.4}s`
            }}>{l}</span>
          ))}
        </div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-village-gold shadow-lg">
            <img src="/logo.png" alt="The Village Mandi" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black text-village-gold mb-3" style={{ fontFamily: '"Playfair Display", serif' }}>
            Our Story
          </h1>
          <div className="divider-leaf" />
          <p className="text-village-sand opacity-80 text-lg mt-4 leading-relaxed">
            Born from a love for authentic Mandi, raised with the spirit of a village kitchen.
          </p>
        </div>
      </div>

      {/* Story section */}
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-village-sand mb-8">
          <h2 className="font-display text-2xl font-bold text-village-darkbrown mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            🌿 Where It All Began
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 text-sm">
            <p>
              The Village Mandi & Restaurant was built on one simple belief — that great Mandi rice should be accessible to everyone in Hyderabad, cooked with the same care and tradition as a village feast.
            </p>
            <p>
              Nestled in Dulapally, Kompally, we serve authentic Arabian-style Mandi with slow-cooked meats, fragrant rice and a warmth that feels like home. From our Chicken Ghee Roast Mandi to our legendary Village Special Platters for groups, every dish is crafted with passion.
            </p>
            <p>
              We recently stepped away from Swiggy and Zomato — not because we don't want to grow, but because we believe you deserve the real price for real food. When you order directly through our WhatsApp, 100% of the value goes into your plate. That's the Village Mandi promise.
            </p>
          </div>
        </div>

        {/* Values */}
        <h2 className="font-display text-2xl font-bold text-village-darkbrown mb-6 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {TEAM_VALUES.map((v, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-village-sand flex gap-4 items-start">
              <div className="text-3xl shrink-0">{v.icon}</div>
              <div>
                <h3 className="font-bold text-village-darkbrown mb-1">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why no Swiggy */}
        <div className="rounded-2xl p-8 mb-8 text-white" style={{ background: 'linear-gradient(135deg,#2d1a05,#4a2c0a)' }}>
          <h2 className="font-display text-2xl font-bold text-village-gold mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            🚫 Why We Left Swiggy & Zomato
          </h2>
          <p className="text-village-sand leading-relaxed text-sm mb-4">
            Food delivery platforms charge restaurants 20–30% commission on every order. That means for every ₹300 dish you order, we only receive ₹210–240. We either absorb that loss, or we raise prices on you.
          </p>
          <p className="text-village-sand leading-relaxed text-sm mb-4">
            We chose a third option: <strong className="text-village-gold">cut out the middleman entirely.</strong> When you order via WhatsApp directly, you get the real menu price, we get 100% of the revenue, and everyone wins.
          </p>
          <p className="text-village-gold font-bold text-sm">
            📲 Order directly. Save money. Support local. That's the Village way.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/order"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-black text-lg px-8 py-4 rounded-full wa-pulse transition-all mr-3"
          >
            📲 Order Now
          </Link>
          <Link to="/contact"
            className="inline-flex items-center gap-2 border-2 border-village-amber text-village-amber font-bold text-lg px-8 py-4 rounded-full hover:bg-village-amber hover:text-white transition-all"
          >
            📍 Visit Us
          </Link>
        </div>
      </div>
    </div>
  )
}
