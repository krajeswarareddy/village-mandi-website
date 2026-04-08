const WA = 'https://wa.me/916302984074'

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ background: '#f5f0e8', paddingTop: 72 }}>
      {/* Header */}
      <div style={{ background: '#2d1a05' }} className="py-12 px-4 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-black text-village-gold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>
          Find Us
        </h1>
        <div className="divider-leaf" />
        <p className="text-village-sand opacity-70 mt-3">We're right here in Dulapally — come visit or order online</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Info card */}
        <div className="flex flex-col gap-5">
          {/* Address */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-village-sand">
            <h2 className="font-bold text-village-darkbrown text-lg mb-4 flex items-center gap-2">
              📍 Address
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm mb-4">
              2nd Floor, ANR Complex,<br />
              Doolapally Rd, Jaibery Colony,<br />
              Kompally, Secunderabad,<br />
              Hyderabad, Telangana 500100
            </p>
            <a
              href="https://www.google.com/maps/place/The+Village+Mandi+%26+Restaurant/@17.5454062,78.4701851,17z"
              target="_blank" rel="noreferrer"
              className="inline-block text-sm text-village-amber font-bold hover:underline"
            >
              Open in Google Maps →
            </a>
          </div>

          {/* Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-village-sand">
            <h2 className="font-bold text-village-darkbrown text-lg mb-4 flex items-center gap-2">
              🕐 Hours
            </h2>
            <div className="text-sm text-gray-700 space-y-1">
              <div className="flex justify-between">
                <span>Monday – Friday</span><span className="font-medium text-village-green">11:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday – Sunday</span><span className="font-medium text-village-green">11:00 AM – 11:30 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-village-sand">
            <h2 className="font-bold text-village-darkbrown text-lg mb-4">📞 Contact</h2>
            <div className="flex flex-col gap-3">
              <a href={WA} target="_blank" rel="noreferrer"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-5 py-3 rounded-xl wa-pulse transition-all"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.133 1.545 5.862L0 24l6.342-1.512A11.927 11.927 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.988-1.364l-.358-.213-3.764.898.928-3.668-.233-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
                </svg>
                WhatsApp: 6302984074
              </a>
              <a href="https://www.instagram.com/the_village_mandi" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold px-5 py-3 rounded-xl hover:opacity-90 transition-all"
              >
                📸 Follow on Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-sm border border-village-sand" style={{ minHeight: 400 }}>
          <iframe
            title="The Village Mandi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3!2d78.4701851!3d17.5454062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fbf9f1e5213%3A0xbd068a9749ff2e66!2sThe%20Village%20Mandi%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 400 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
