import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const WA_NUMBER = '916302984074'

export default function Order() {
  const { cart, updateQty, removeItem, total, clearCart, buildWhatsAppMessage, itemCount } = useCart()

  const placeOrder = () => {
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <div className="min-h-screen" style={{ background: '#f5f0e8', paddingTop: 72 }}>
      <div style={{ background: '#2d1a05' }} className="py-10 px-4 text-center">
        <h1 className="font-display text-4xl font-black text-village-gold" style={{ fontFamily: '"Playfair Display", serif' }}>Your Order</h1>
        <div className="divider-leaf" />
        <p className="text-village-sand opacity-70 text-sm mt-2">Review and send via WhatsApp</p>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-village-darkbrown font-bold text-xl mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Browse our menu and add items to order</p>
            <Link to="/menu" className="inline-block bg-village-amber text-white font-bold px-8 py-3 rounded-full hover:bg-village-clay transition-all">
              Browse Menu
            </Link>
          </div>
        ) : (
          <>
            {/* Cart items */}
            <div className="bg-white rounded-2xl shadow-sm border border-village-sand overflow-hidden mb-4">
              <div className="px-5 py-3 border-b border-village-sand bg-village-cream">
                <h2 className="font-bold text-village-darkbrown">{itemCount} item{itemCount > 1 ? 's' : ''}</h2>
              </div>
              {cart.map((item, i) => (
                <div key={i} className="px-5 py-4 border-b border-village-sand border-opacity-50 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-village-darkbrown text-sm">{item.name}</p>
                    {item.variant && <p className="text-xs text-gray-500">{item.variant}</p>}
                    <p className="text-village-amber font-bold text-sm mt-0.5">₹{item.price} each</p>
                  </div>
                  {/* Qty controls */}
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(item.name, item.variant, item.qty - 1)}
                      className="w-7 h-7 rounded-full bg-village-sand text-village-darkbrown font-bold text-lg flex items-center justify-center hover:bg-village-amber hover:text-white transition-all"
                    >−</button>
                    <span className="w-6 text-center font-bold text-village-darkbrown text-sm">{item.qty}</span>
                    <button onClick={() => updateQty(item.name, item.variant, item.qty + 1)}
                      className="w-7 h-7 rounded-full bg-village-sand text-village-darkbrown font-bold text-lg flex items-center justify-center hover:bg-village-amber hover:text-white transition-all"
                    >+</button>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-village-darkbrown text-sm">₹{item.price * item.qty}</p>
                    <button onClick={() => removeItem(item.name, item.variant)} className="text-xs text-red-400 hover:text-red-600 mt-1">Remove</button>
                  </div>
                </div>
              ))}
              {/* Total */}
              <div className="px-5 py-4 bg-village-cream flex justify-between items-center">
                <span className="font-bold text-village-darkbrown">Total</span>
                <span className="font-black text-xl text-village-amber">₹{total}</span>
              </div>
            </div>

            {/* Note */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-sm text-green-800">
              <p className="font-bold mb-1">📲 How it works:</p>
              <p>Click the button below → WhatsApp opens with your order pre-filled → Send the message → We confirm your order!</p>
            </div>

            {/* WhatsApp Order Button */}
            <button onClick={placeOrder}
              className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black text-xl py-5 rounded-2xl wa-pulse transition-all shadow-lg mb-4"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.133 1.545 5.862L0 24l6.342-1.512A11.927 11.927 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.988-1.364l-.358-.213-3.764.898.928-3.668-.233-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
              </svg>
              Send Order on WhatsApp
            </button>

            <div className="flex gap-3">
              <Link to="/menu" className="flex-1 text-center border-2 border-village-amber text-village-amber font-bold py-3 rounded-xl hover:bg-village-amber hover:text-white transition-all text-sm">
                + Add More Items
              </Link>
              <button onClick={clearCart} className="flex-1 text-center border-2 border-red-200 text-red-400 font-bold py-3 rounded-xl hover:bg-red-50 transition-all text-sm">
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
