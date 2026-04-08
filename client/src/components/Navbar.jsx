import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/',        label: 'Home'    },
    { to: '/menu',    label: 'Menu'    },
    { to: '/gallery', label: 'Gallery' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/about',   label: 'About'   },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
  scrolled 
    ? 'bg-[#030200]/80 border-b border-[#B8860B]/20 shadow-lg' 
    : 'bg-transparent'
}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="The Village Mandi" className="h-12 w-12 rounded-full object-cover" />
          <div className="hidden sm:block">
            <p className="text-village-gold font-display font-bold text-lg leading-none" style={{ fontFamily: '"Playfair Display", serif' }}>The Village Mandi</p>
            <p className="text-village-sand text-xs tracking-wider opacity-70">Dulapally, Hyderabad</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`text-sm font-medium transition-all duration-300 ${
  location.pathname === l.to
    ? 'text-[#FFC72C]'
    : 'text-village-sand hover:text-[#FFC72C]'
}`}
            >{l.label}</Link>
          ))}
        </div>

        {/* Order button + cart */}
        <div className="flex items-center gap-3">
          <Link to="/order"
            className="hidden sm:flex items-center gap-2 bg-[#25D366] text-white text-sm font-bold px-5 py-2 rounded-full 
hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] 
transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.133 1.545 5.862L0 24l6.342-1.512A11.927 11.927 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.988-1.364l-.358-.213-3.764.898.928-3.668-.233-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            Order
          </Link>
          <Link to="/order" className="relative">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-village-sand hover:text-village-gold transition-colors">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">{itemCount}</span>
            )}
          </Link>
          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-village-sand p-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              {menuOpen
                ? <path d="M6 18L18 6M6 6l12 12"/>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#030200]/95 backdrop-blur-md border-t border-[#B8860B]/20 px-4 py-4 flex flex-col gap-3">
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)}
              className="text-village-sand hover:text-village-gold font-medium py-1 border-b border-village-brown border-opacity-30"
            >{l.label}</Link>
          ))}
          <Link to="/order" onClick={() => setMenuOpen(false)}
            className="mt-2 bg-green-600 text-white text-center py-2 rounded-full font-bold"
          >📲 Order via WhatsApp</Link>
        </div>
      )}
    </nav>
  )
}
