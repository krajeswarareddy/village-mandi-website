import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.name === item.name && i.variant === item.variant)
      if (exists) return prev.map(i =>
        i.name === item.name && i.variant === item.variant
          ? { ...i, qty: i.qty + 1 }
          : i
      )
      return [...prev, { ...item, qty: 1 }]
    })
  }

  const removeItem = (name, variant) => {
    setCart(prev => prev.filter(i => !(i.name === name && i.variant === variant)))
  }

  const updateQty = (name, variant, qty) => {
    if (qty <= 0) { removeItem(name, variant); return }
    setCart(prev => prev.map(i =>
      i.name === name && i.variant === variant ? { ...i, qty } : i
    ))
  }

  const clearCart = () => setCart([])

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0)

  const buildWhatsAppMessage = () => {
    let msg = `🌿 *Order from The Village Mandi Website*\n\n`
    cart.forEach(i => {
      msg += `• ${i.name}${i.variant ? ` (${i.variant})` : ''} × ${i.qty} = ₹${i.price * i.qty}\n`
    })
    msg += `\n*Total: ₹${total}*\n\nPlease confirm my order. Thank you! 🙏`
    return encodeURIComponent(msg)
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQty, clearCart, total, itemCount, buildWhatsAppMessage }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
