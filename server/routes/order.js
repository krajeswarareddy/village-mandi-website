const express = require('express')
const router  = express.Router()

const WA_NUMBER = '916302984074'

// POST /api/order
// Body: { items: [{ name, variant, price, qty }] }
router.post('/', (req, res) => {
  const { items, customerName } = req.body

  if (!items || items.length === 0) {
    return res.status(400).json({ error: 'No items in order' })
  }

  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

  let msg = `🌿 *Order from The Village Mandi Website*\n`
  if (customerName) msg += `👤 Name: ${customerName}\n`
  msg += `\n`

  items.forEach(item => {
    msg += `• ${item.name}${item.variant ? ` (${item.variant})` : ''} × ${item.qty} = ₹${item.price * item.qty}\n`
  })

  msg += `\n*Total: ₹${total}*`
  msg += `\n\nPlease confirm my order. Thank you! 🙏`

  const encoded = encodeURIComponent(msg)
  const waUrl   = `https://wa.me/${WA_NUMBER}?text=${encoded}`

  res.json({ success: true, whatsappUrl: waUrl, total })
})

// GET /api/order/whatsapp — quick direct link with just the number
router.get('/whatsapp', (req, res) => {
  res.redirect(`https://wa.me/${WA_NUMBER}`)
})

module.exports = router
