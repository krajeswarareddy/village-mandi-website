import { Link } from 'react-router-dom'

export default function Footer() {
  const wa = `https://wa.me/916302984074`
  return (
    <footer style={{ background: '#1a0e03' }} className="text-village-sand pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div>
          <img src="/logo.png" alt="The Village Mandi" className="h-16 w-16 rounded-full mb-3" />
          <h3 className="font-display text-village-gold font-bold text-lg mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>The Village Mandi</h3>
          <p className="text-sm opacity-70 leading-relaxed">Authentic Mandi &amp; Arabian cuisine in the heart of Dulapally. Order directly — no middleman, no extra fees.</p>
        </div>
        {/* Links */}
        <div>
          <h4 className="text-village-gold font-bold mb-3 uppercase tracking-wider text-sm">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            {[['/', 'Home'], ['/menu', 'Full Menu'], ['/order', 'Order Now'], ['/gallery', 'Gallery'], ['/about', 'About Us'], ['/contact', 'Contact']].map(([to, label]) => (
              <Link key={to} to={to} className="hover:text-village-gold transition-colors">{label}</Link>
            ))}
          </div>
        </div>
        {/* Contact */}
        <div>
          <h4 className="text-village-gold font-bold mb-3 uppercase tracking-wider text-sm">Find Us</h4>
          <p className="text-sm opacity-80 leading-relaxed mb-3">
            2nd Floor, ANR Complex,<br/>
            Doolapally Rd, Jaibery Colony,<br/>
            Kompally, Secunderabad,<br/>
            Hyderabad, Telangana 500100
          </p>
          <a href={wa} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full transition-all wa-pulse"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.564 4.133 1.545 5.862L0 24l6.342-1.512A11.927 11.927 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.988-1.364l-.358-.213-3.764.898.928-3.668-.233-.374A9.817 9.817 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182c5.43 0 9.818 4.388 9.818 9.818 0 5.43-4.388 9.818-9.818 9.818z"/>
            </svg>
            6302984074
          </a>
        </div>
      </div>
      <p className="text-[#f5f0e8]/25 font-body text-xs text-center">
  © 2026 The Village Mandi & Restaurant. All rights reserved. | Dulapally, Hyderabad
</p>

<a
  href="https://www.linkedin.com/in/rajeswarareddyk/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#f5f0e8]/30 font-body text-xs hover:text-[#FFC72C] transition-colors duration-300"
>
  Built with Passion by{" "}
  <span className="text-[#FFC72C] font-semibold">
    K RAJESWARA REDDY
  </span>
</a>
    </footer>
  )
}
