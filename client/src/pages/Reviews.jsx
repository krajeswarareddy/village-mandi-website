const REVIEWS = [
  {
    name: 'Sai Krishna Reddy',
    rating: 5,
    date: 'March 2026',
    avatar: '👨‍💼',
    review: 'The Chicken Ghee Roast Mandi is absolutely out of this world. The rice was perfectly cooked, incredibly aromatic, and the chicken just fell off the bone. I have been to many mandi places in Hyderabad — this is hands down the best in Kompally area. Will keep coming back!'
  },
  {
    name: 'Priya Lakshmi',
    rating: 5,
    date: 'February 2026',
    avatar: '👩',
    review: 'Came here for a family dinner with 6 people and ordered the Village Special Mixed Platter. Worth every rupee. The portions are huge, everything was fresh, and the cool drinks included were a nice touch. Love that you can now order directly on WhatsApp without paying extra on Swiggy!'
  },
  {
    name: 'Mohammed Aslam',
    rating: 5,
    date: 'February 2026',
    avatar: '👨',
    review: 'Best Mutton Mandi in Hyderabad, I am saying this after trying 10+ places. The mutton was so tender and the rice had this beautiful smoky flavour. Ordered via WhatsApp and the food arrived quickly. Staff is very polite and helpful. Highly recommended!'
  },
  {
    name: 'Ananya Sharma',
    rating: 4,
    date: 'January 2026',
    avatar: '👩‍🦱',
    review: 'The Chicken Biryani and Chicken 65 combo was amazing. Place has a great village ambience, felt very homely. The Garlic Naan was surprisingly good too. Only wish they had a bigger parking space. The direct WhatsApp ordering is so convenient, no platform charges on top.'
  },
  {
    name: 'Venkat Rao',
    rating: 5,
    date: 'January 2026',
    avatar: '👴',
    review: 'Took my whole office team here for lunch. Ordered multiple Chicken and Mutton Mandis. Everyone was thoroughly impressed. The service is fast, the place is clean, and the food quality is consistent. The Mutton Juicy Mandi is the star of the menu. 10/10 would recommend!'
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill={i < count ? '#d4a017' : '#e5e7eb'} className="w-4 h-4">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const avg = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1)

  return (
    <div className="min-h-screen" style={{ background: '#f5f0e8', paddingTop: 72 }}>
      {/* Header */}
      <div style={{ background: '#2d1a05' }} className="py-12 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black text-village-gold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
          Customer Reviews
        </h1>
        <div className="divider-leaf" />
        {/* Rating summary */}
        <div className="mt-4 inline-flex items-center gap-3 bg-village-darkbrown rounded-2xl px-6 py-3">
          <span className="text-4xl font-black text-village-gold">{avg}</span>
          <div>
            <Stars count={5} />
            <p className="text-village-sand text-xs opacity-70 mt-1">Based on {REVIEWS.length} reviews</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-5">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-village-sand">
              <div className="flex items-start gap-4 mb-3">
                <div className="text-3xl">{r.avatar}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-1">
                    <h3 className="font-bold text-village-darkbrown">{r.name}</h3>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                  <Stars count={r.rating} />
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{r.review}</p>
              {/* Google badge */}
              <div className="mt-3 flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs text-gray-400">Google Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center bg-village-darkbrown rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold text-village-gold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Loved our food?</h3>
          <p className="text-village-sand text-sm opacity-70 mb-4">Leave a review on Google and help others find us!</p>
          <a href="https://www.google.com/maps/place/The+Village+Mandi+%26+Restaurant" target="_blank" rel="noreferrer"
            className="inline-block bg-village-amber text-white font-bold px-6 py-2.5 rounded-full hover:bg-village-clay transition-all text-sm"
          >
            ⭐ Write a Review on Google
          </a>
        </div>
      </div>
    </div>
  )
}
