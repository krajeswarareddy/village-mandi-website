require('dotenv').config()
const express = require('express')
const cors    = require('cors')
const orderRouter = require('./routes/order')

const app  = express()
const PORT = process.env.PORT || 5000

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }))
app.use(express.json())

// Routes
app.use('/api/order', orderRouter)

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', restaurant: 'The Village Mandi' }))

app.listen(PORT, () => {
  console.log(`🌿 Village Mandi server running on http://localhost:${PORT}`)
})
