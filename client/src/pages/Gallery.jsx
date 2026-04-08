// Gallery page - uses placeholder images with labels
// To replace: swap the src of each img with your real photo URLs

const GALLERY_ITEMS = [
  { emoji: '🍗', label: 'Chicken Mandi',        bg: '#c8722a', desc: 'Aromatic Mandi rice with tender chicken' },
  { emoji: '🥩', label: 'Mutton Mandi',          bg: '#8b2500', desc: 'Slow-cooked mutton on Mandi rice' },
  { emoji: '🍚', label: 'Chicken Biryani',       bg: '#d4a017', desc: 'Classic Hyderabadi dum biryani' },
  { emoji: '🔥', label: 'Chicken 65',            bg: '#c0392b', desc: 'Crispy spiced chicken starter' },
  { emoji: '🫕', label: 'Ghee Roast Mandi',     bg: '#b85c2a', desc: 'Mandi with ghee-roasted chicken' },
  { emoji: '🐟', label: 'Fish Mandi',            bg: '#1a5276', desc: 'Fresh fish on fragrant Mandi rice' },
  { emoji: '🏆', label: 'Village Special Platter', bg: '#4a2c0a', desc: 'The ultimate group feast platter' },
  { emoji: '🍢', label: 'Chicken Kebab',         bg: '#6d3d0e', desc: 'Juicy kebabs from the tandoor' },
  { emoji: '🥗', label: 'Paneer Tikka',          bg: '#2d5016', desc: 'Smoky paneer from tandoor' },
  { emoji: '🍮', label: 'Apricot Delight',       bg: '#a0522d', desc: 'Sweet finish to your meal' },
  { emoji: '🥤', label: 'Milkshakes',            bg: '#5b2d8e', desc: 'Thick shakes in 4 flavours' },
  { emoji: '🌿', label: 'Restaurant Ambience',   bg: '#2d5016', desc: 'Warm village-style interiors' },
]

export default function Gallery() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f0e8', paddingTop: 72 }}>
      {/* Header */}
      <div style={{ background: '#2d1a05' }} className="py-12 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black text-village-gold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
          Gallery
        </h1>
        <div className="divider-leaf" />
        <p className="text-village-sand opacity-70 mt-3">A feast for the eyes, before it becomes a feast for the stomach</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ aspectRatio: '1', background: item.bg }}
            >
              {/* Placeholder — replace this div with an <img> tag */}
              <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
                <div className="text-6xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.emoji}</div>
                <p className="text-white font-bold text-sm text-center">{item.label}</p>
                <p className="text-white opacity-70 text-xs text-center mt-1">{item.desc}</p>
                {/* Replace photo label */}
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-30 text-white text-xs px-2 py-0.5 rounded-full">
                  📷 Add Photo
                </div>
              </div>
              {/*
                TO ADD REAL PHOTO — replace the div above with:
                <img
                  src="/images/chicken-mandi.jpg"
                  alt="Chicken Mandi"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              */}
            </div>
          ))}
        </div>

        {/* How to add photos note */}
        <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-5 text-sm text-blue-800">
          <p className="font-bold mb-1">📸 How to add real food photos:</p>
          <p>Add your photos to <code className="bg-blue-100 px-1 rounded">client/public/images/</code> and update the <code className="bg-blue-100 px-1 rounded">Gallery.jsx</code> file to use <code className="bg-blue-100 px-1 rounded">&lt;img src="/images/yourphoto.jpg" /&gt;</code> instead of the placeholder divs.</p>
        </div>
      </div>
    </div>
  )
}
