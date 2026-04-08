import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import VillageWelcome from './components/VillageWelcome'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Order from './pages/Order'
import Gallery from './pages/Gallery'
import Reviews from './pages/Reviews'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Only show welcome on first visit per session
  useEffect(() => {
    const seen = sessionStorage.getItem('vm_welcomed')
    if (seen) setShowWelcome(false)
    setMounted(true)
  }, [])

  const handleWelcomeDone = () => {
    setShowWelcome(false)
    sessionStorage.setItem('vm_welcomed', '1')
  }

  if (!mounted) return null

  return (
    <CartProvider>
      <BrowserRouter>
        {showWelcome && <VillageWelcome onDone={handleWelcomeDone} />}
        <div style={{ opacity: showWelcome ? 0 : 1, transition: 'opacity 0.5s ease' }}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/"        element={<Home />} />
              <Route path="/menu"    element={<Menu />} />
              <Route path="/order"   element={<Order />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/about"   element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}
