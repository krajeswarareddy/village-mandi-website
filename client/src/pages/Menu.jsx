import { useState } from 'react'
import { menuData, categoryIcons } from '../data/menuData'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Mandi - Chicken')
  const [search, setSearch] = useState('')
  const { addItem, cart } = useCart()
  const [added, setAdded] = useState({})

  const categories = Object.keys(menuData)

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
      {/* Header */}
      <div style={{ background: '#2d1a05' }} className="py-12 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black text-village-gold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
          Our Menu
        </h1>
        <div className="divider-leaf" />
        <p className="text-village-sand opacity-70 mt-3">Fresh from our kitchen every day</p>
        {/* Search */}
        <div className="mt-6 max-w-md mx-auto relative">
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-village-darkbrown text-village-sand placeholder-village-sand placeholder-opacity-50 border border-village-amber border-opacity-30 focus:outline-none focus:border-village-gold text-sm"
          />
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute right-4 top-3.5 w-4 h-4 text-village-sand opacity-50">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 flex gap-6">
        {/* Sidebar categories */}
        {!search && (
          <div className="hidden md:block w-56 shrink-0">
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

        {/* Mobile category pills */}
        {!search && (
          <div className="md:hidden w-full mb-4 overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                    activeCategory === cat
                      ? 'bg-village-amber text-white border-village-amber'
                      : 'border-village-brown text-village-brown bg-white'
                  }`}
                >{categoryIcons[cat]} {cat.split(' - ')[1] || cat.split(' ')[0]}</button>
              ))}
            </div>
          </div>
        )}

        {/* Items */}
        <div className="flex-1">
          {filteredCategories.map(cat => (
            <div key={cat} className="mb-8">
              <h2 className="font-display text-2xl font-bold text-village-darkbrown mb-4 flex items-center gap-2" style={{ fontFamily: '"Playfair Display", serif' }}>
                {categoryIcons[cat]} {cat}
              </h2>
              <div className="grid gap-3">
                {getItems(cat).map((item, idx) => {
                  const key0 = `${item.name}-`
                  return (
                    <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-village-sand hover:shadow-md transition-all flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-village-darkbrown text-sm">{item.name}</h3>
                        {item.desc && <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>}
                        {item.note && <p className="text-xs text-village-amber font-medium">{item.note}</p>}
                      </div>
                      {/* Price & Add */}
                      <div className="shrink-0 text-right">
                        {item.prices ? (
                          <div className="flex flex-wrap gap-1 justify-end">
                            {Object.entries(item.prices).map(([variant, price]) => {
                              const k = `${item.name}-${variant}`
                              return (
                                <button key={variant} onClick={() => handleAdd(item, variant, price)}
                                  className={`text-xs font-bold px-2 py-1 rounded-lg border transition-all ${
                                    added[k]
                                      ? 'bg-green-500 text-white border-green-500'
                                      : inCart(item.name)
                                        ? 'bg-village-amber text-white border-village-amber'
                                        : 'border-village-amber text-village-amber hover:bg-village-amber hover:text-white'
                                  }`}
                                >
                                  {variant} ₹{price}
                                </button>
                              )
                            })}
                          </div>
                        ) : item.price > 0 ? (
                          <button onClick={() => handleAdd(item, '', item.price)}
                            className={`text-sm font-bold px-3 py-1.5 rounded-lg border transition-all ${
                              added[key0]
                                ? 'bg-green-500 text-white border-green-500'
                                : 'border-village-amber text-village-amber hover:bg-village-amber hover:text-white'
                            }`}
                          >
                            {added[key0] ? '✓ Added' : `₹${item.price} + Add`}
                          </button>
                        ) : (
                          <span className="text-xs text-gray-400 italic">MRP</span>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky order bar */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-green-600 text-white px-4 py-3 flex items-center justify-between shadow-lg">
          <span className="font-bold text-sm">{cart.reduce((s,i)=>s+i.qty,0)} items in cart</span>
          <Link to="/order" className="bg-white text-green-700 font-black text-sm px-6 py-2 rounded-full hover:scale-105 transition-transform">
            View Order →
          </Link>
        </div>
      )}
    </div>
  )
}
