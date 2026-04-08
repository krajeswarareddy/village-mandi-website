# 🌿 The Village Mandi & Restaurant — Official Website

A full-stack restaurant website for **The Village Mandi & Restaurant**, Dulapally, Hyderabad.

**Tech Stack:** React + Vite + Tailwind CSS (frontend) · Node.js + Express (backend)

---

## 📁 Project Structure

```
village-mandi/
├── client/               ← React frontend
│   ├── public/
│   │   └── logo.png      ← ⚠️ ADD YOUR LOGO HERE
│   └── src/
│       ├── pages/        ← Home, Menu, Order, Gallery, Reviews, About, Contact
│       ├── components/   ← Navbar, Footer, VillageWelcome
│       ├── context/      ← CartContext (global cart state)
│       └── data/         ← menuData.js (all menu items & prices)
└── server/               ← Node.js + Express backend
    ├── routes/order.js   ← WhatsApp order logic
    └── server.js         ← Entry point
```

---

## 🚀 STEP 1 — Install & Run Locally

### Prerequisites
- Node.js v18+ installed (check: `node --version`)
- VS Code installed

### Install all dependencies

Open terminal in VS Code (`Ctrl + `` ` ``), then:

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..

# Install backend dependencies
cd server
npm install
cd ..
```

### Add your logo

Copy the restaurant logo PNG to:
```
client/public/logo.png
```

### Start development servers

Open **two terminals** in VS Code:

**Terminal 1 — Frontend:**
```bash
cd client
npm run dev
```
Frontend runs at: http://localhost:5173

**Terminal 2 — Backend:**
```bash
cd server
cp .env.example .env
npm run dev
```
Backend runs at: http://localhost:5000

### Open in browser
Visit: **http://localhost:5173**

---

## 📲 How WhatsApp Ordering Works

1. Customer browses menu → adds items to cart
2. Customer clicks "Send Order on WhatsApp"
3. WhatsApp opens on their phone/desktop with a pre-filled message listing all items + total
4. Customer clicks Send → message goes to **6302984074**
5. Restaurant confirms the order

No app, no signup, no extra fees. 100% direct.

---

## 📸 Adding Real Food Photos (Gallery)

1. Add your photos to: `client/public/images/`
2. Open: `client/src/pages/Gallery.jsx`
3. Replace the placeholder div with a real `<img>` tag:

```jsx
// Replace this:
<div className="w-full h-full flex flex-col items-center justify-center">
  ...placeholder content...
</div>

// With this:
<img
  src="/images/chicken-mandi.jpg"
  alt="Chicken Mandi"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

---

## 📋 Updating Menu Prices

All menu items are in one file:
```
client/src/data/menuData.js
```

Just find the item name and update the price number. Save the file — the website updates instantly.

---

## 🌐 STEP 2 — Push to GitHub (via VS Code)

### First time setup

1. Go to **github.com** → Sign in → Click **New Repository**
2. Name it: `village-mandi-website`
3. Set to **Private** → Click **Create Repository**
4. Copy the repository URL (looks like: `https://github.com/yourusername/village-mandi-website.git`)

### Initialize Git in VS Code

Open terminal in VS Code at the project root (`village-mandi/` folder):

```bash
git init
git add .
git commit -m "Initial commit - Village Mandi website"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/village-mandi-website.git
git push -u origin main
```

> Replace `YOURUSERNAME` with your actual GitHub username.

### Future updates (after changing files)

```bash
git add .
git commit -m "Updated menu prices"
git push
```

---

## 🌍 STEP 3 — Deploy to Hosting Raja

After buying domain + hosting from Hosting Raja:

### Build the frontend

```bash
cd client
npm run build
```

This creates a `client/dist/` folder with all the optimized files.

### Upload to Hosting Raja

**Option A — cPanel File Manager:**
1. Log into Hosting Raja cPanel
2. Go to **File Manager** → `public_html`
3. Upload all files from `client/dist/` into `public_html`
4. Upload the `server/` folder separately (or use a Node.js app from cPanel)

**Option B — FTP (FileZilla):**
1. Download FileZilla
2. Connect using Hosting Raja FTP credentials
3. Upload `client/dist/` contents to `public_html/`

### Point domain to website

In Hosting Raja DNS settings:
- A Record → Point to your server IP
- Or use the nameservers they provide

### Backend deployment (for WhatsApp API features)

If Hosting Raja supports Node.js apps:
```bash
# On the server
cd server
cp .env.example .env
# Edit .env: set CLIENT_URL=https://www.yourdomainname.com
npm install
npm start
```

> **Tip:** Ask Hosting Raja support: *"How do I run a Node.js Express app on my hosting?"* — they will guide you.

---

## 🛠️ Client Info Collection Checklist

When you get a new client to rebuild this for their restaurant, collect:

### Mandatory
- [ ] Restaurant name
- [ ] Full address (street, area, city, pincode)
- [ ] WhatsApp number for orders
- [ ] Logo file (PNG, transparent background preferred)
- [ ] Operating hours

### Menu
- [ ] All menu categories
- [ ] All dish names with prices
- [ ] Any special platters or combos

### Content
- [ ] 8-12 food photos (high resolution)
- [ ] 3-5 real Google reviews (copy text + reviewer name)
- [ ] Instagram handle / social media links
- [ ] Google Maps link

### Optional but great
- [ ] Short "about us" story (2-3 sentences)
- [ ] Any certifications or awards

---

## 📞 Support

Restaurant: **The Village Mandi & Restaurant**
WhatsApp: **6302984074**
Location: 2nd Floor, ANR Complex, Doolapally Rd, Jaibery Colony, Kompally, Secunderabad, Hyderabad 500100
Instagram: [@the_village_mandi](https://www.instagram.com/the_village_mandi)
