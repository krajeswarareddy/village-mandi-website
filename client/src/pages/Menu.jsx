import { useState, useRef, useEffect } from 'react'
import { menuData, categoryIcons } from '../data/menuData'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

// Short labels for mobile pills
const shortLabel = (cat) => {
  const map = {
    'Mandi - Chicken':          '🍗 Chicken',
    'Mandi - Mutton':           '🥩 Mutton',
    'Mandi - Veg':              '🌿 Veg',
    'Village Special Platters': '🏆 Platters',
    'Biryani':                  '🍚 Biryani',
    'Starters - Non Veg':       '🔥 Starters NV',
    'Starters - Veg':           '🥦 Starters V',
    'Starters - Seafood':       '🐟 Seafood',
    'Starters - Egg':           '🥚 Egg',
    'Indian Curries - Non Veg': '🍛 Curry NV',
    'Indian Curries - Veg':     '🫕 Curry V',
    'Tandoor Ka Khajana':       '🔥 Tandoor',
    'Soups':                    '🥣 Soups',
    'Desserts':                 '🍮 Desserts',
    'Beverages':                '🥤 Drinks',
  }
  return map[cat] || cat
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Mandi - Chicken')
  const [search, setSearch] = useState('')
  const { addItem, cart } = useCart()
  const [added, setAdded] = useState({})
  const pillsRef = useRef(null)

  const categories = Object.keys(menuData)

  // Scroll active pill into view
  useEffect(() => {
    if (!pillsRef.current) return
    const active = pillsRef.current.querySelector('[data-active="true"]')
    if (active) active.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeCategory])

  const handleAdd = (item, variant, price) => {
    addItem({ name: item.name, variant, price })
    const key = `${item.name}-${variant}`
    setAdded(p => ({ ...p, [key]: true }))
    setTimeout(() => setAdded(p => ({ ...p, [key]: false })), 1000)
  }

  const filteredCategories = search
    ? categories.filter(cat =>
        menuData[cat].some(item => item.name.toLowerCase().includes(search.toLowerCase()))
      )
    : [activeCategory]

  const getItems = (cat) => search
    ? menuData[cat].filter(i => i.name.toLowerCase().includes(search.toLowerCase()))
    : menuData[cat]

  const inCart = (name) => cart.some(i => i.name === name)

  return (
    <div className="min-h-screen" style={{ background: '#f5f0e8', paddingTop: 72 }}>

      {/* ── HEADER ── */}
      <div style={{ background: '#2d1a05' }} className="py-10 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black text-village-gold mb-2"
          style={{ fontFamily: '"Playfair Display", serif' }}>
          Our Menu
        </h1>
        <div className="divider-leaf" />
        <p className="text-village-sand opacity-70 mt-3 text-sm">Fresh from our kitchen every day</p>
        {/* Search */}
        <div className="mt-5 max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-village-darkbrown text-village-sand placeholder-village-sand placeholder-opacity-50 border border-village-amber border-opacity-30 focus:outline-none focus:border-village-gold text-sm"
          />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            className="absolute right-4 top-3.5 w-4 h-4 text-village-sand opacity-50">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
      </div>

      {/* ── MOBILE CATEGORY PILLS (full-width scroll) ── */}
      {!search && (
        <div
          ref={pillsRef}
          className="md:hidden bg-white border-b border-village-sand shadow-sm overflow-x-auto"
          style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }}
        >
          <div className="flex gap-2 px-3 py-3" style={{ width: 'max-content' }}>
            {categories.map(cat => (
              <button
                key={cat}
                data-active={activeCategory === cat ? 'true' : 'false'}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3 py-2 rounded-full text-xs font-bold border transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-village-amber text-white border-village-amber shadow-sm'
                    : 'border-village-amber border-opacity-40 text-village-brown bg-village-cream'
                }`}
              >
                {shortLabel(cat)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── MAIN LAYOUT ── */}
      <div className="max-w-6xl mx-auto px-3 md:px-6 py-5 md:py-8 flex gap-6">

        {/* Desktop sidebar */}
        {!search && (
          <div className="hidden md:block w-52 shrink-0">
            <div className="sticky top-20 bg-white rounded-2xl shadow-sm overflow-hidden border border-village-sand">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-2 border-b border-village-sand border-opacity-30 transition-all ${
                    activeCategory === cat
                      ? 'bg-village-amber text-white font-bold'
                      : 'text-village-brown hover:bg-village-cream'
                  }`}
                >
                  <span>{categoryIcons[cat]}</span>
                  <span className="leading-tight">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── ITEMS ── */}
        <div className="flex-1 min-w-0">
          {filteredCategories.map(cat => (
            <div key={cat} className="mb-6">
              {/* Category heading */}
              <h2 className="font-display text-xl md:text-2xl font-bold text-village-darkbrown mb-3 flex items-center gap-2"
                style={{ fontFamily: '"Playfair Display", serif' }}>
                {categoryIcons[cat]} {cat}
              </h2>

              <div className="flex flex-col gap-2">
                {getItems(cat).map((item, idx) => {
                  const key0 = `${item.name}-`
                  return (
                    <div key={idx}
                      className="bg-white rounded-xl px-4 py-3 shadow-sm border border-village-sand">

                      {/* Row 1: name */}
                      <p className="font-bold text-village-darkbrown text-sm leading-snug mb-1">
                        {item.name}
                      </p>
                      {item.desc && (
                        <p className="text-xs text-gray-500 mb-2 leading-relaxed">{item.desc}</p>
                      )}
                      {item.note && (
                        <p className="text-xs text-village-amber font-medium mb-1">{item.note}</p>
                      )}

                      {/* Row 2: price buttons — full width wrap */}
                      {item.prices ? (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {Object.entries(item.prices).map(([variant, price]) => {
                            const k = `${item.name}-${variant}`
                            return (
                              <button key={variant}
                                onClick={() => handleAdd(item, variant, price)}
                                className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                                  added[k]
                                    ? 'bg-green-500 text-white border-green-500'
                                    : 'border-village-amber text-village-amber hover:bg-village-amber hover:text-white'
                                }`}
                              >
                                {added[k] ? '✓' : `${variant} ₹${price}`}
                              </button>
                            )
                          })}
                        </div>
                      ) : item.price > 0 ? (
                        <button onClick={() => handleAdd(item, '', item.price)}
                          className={`mt-1 text-sm font-bold px-4 py-1.5 rounded-lg border transition-all ${
                            added[key0]
                              ? 'bg-green-500 text-white border-green-500'
                              : 'border-village-amber text-village-amber hover:bg-village-amber hover:text-white'
                          }`}
                        >
                          {added[key0] ? '✓ Added' : `₹${item.price}  +  Add`}
                        </button>
                      ) : (
                        <span className="text-xs text-gray-400 italic">MRP</span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STICKY CART BAR ── */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-green-600 text-white px-4 py-3 flex items-center justify-between shadow-lg">
          <span className="font-bold text-sm">
            {cart.reduce((s, i) => s + i.qty, 0)} item{cart.reduce((s,i)=>s+i.qty,0)>1?'s':''} · ₹{cart.reduce((s,i)=>s+i.price*i.qty,0)}
          </span>
          <Link to="/order"
            className="bg-white text-green-700 font-black text-sm px-5 py-2 rounded-full hover:scale-105 transition-transform">
            View Order →
          </Link>
        </div>
      )}
    </div>
  )
}
