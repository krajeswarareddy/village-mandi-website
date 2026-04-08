import { useEffect, useState } from 'react'

export default function VillageWelcome({ onDone }) {
  const [phase, setPhase] = useState('enter') // enter | crowing | fade

  useEffect(() => {
    // Phase 1: rooster crows for 2s
    const t1 = setTimeout(() => setPhase('crowing'), 400)
    // Phase 2: fade out after 3.2s total
    const t2 = setTimeout(() => { setPhase('fade'); setTimeout(onDone, 800) }, 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div
      id="village-welcome"
      className={phase === 'fade' ? 'fade-out' : ''}
      style={{ background: 'linear-gradient(160deg,#1a0e03 0%,#2d1a05 60%,#1a2d05 100%)' }}
    >
      {/* Stars / fireflies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-yellow-200"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `dotPulse ${1.5 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Village silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ height: '180px' }}>
        <svg viewBox="0 0 800 180" preserveAspectRatio="xMidYMax slice" style={{ width: '100%', height: '100%' }}>
          {/* Ground */}
          <rect x="0" y="140" width="800" height="40" fill="#0f1a05" />
          {/* Trees */}
          {[60,150,680,740].map((x, i) => (
            <g key={i}>
              <rect x={x+8} y="100" width="6" height="42" fill="#1a3005" />
              <polygon points={`${x},100 ${x+22},100 ${x+11},68`} fill="#1e3a08" />
              <polygon points={`${x+3},85 ${x+19},85 ${x+11},58`} fill="#254d0a" />
            </g>
          ))}
          {/* Huts */}
          {[200,340,480].map((x, i) => (
            <g key={i}>
              <rect x={x} y="118" width="60" height="24" fill="#2a1505" />
              <polygon points={`${x-5},118 ${x+65},118 ${x+30},90`} fill="#3d1f08" />
              <rect x={x+25} y="126" width="12" height="16" fill="#1a0e03" />
            </g>
          ))}
          {/* Smoke from huts */}
          {[215, 355, 495].map((x, i) => (
            <g key={i}>
              <circle cx={x+4} cy="88" r="4" fill="#555" opacity="0.5" className="smoke-1" style={{ animationDelay: `${i*0.4}s` }} />
              <circle cx={x+2} cy="78" r="3" fill="#555" opacity="0.35" className="smoke-2" style={{ animationDelay: `${i*0.4+0.3}s` }} />
            </g>
          ))}
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Rooster SVG */}
        <div className={`mb-4 ${phase === 'crowing' ? 'rooster-anim' : ''}`} style={{ width: 90, height: 90 }}>
          <svg viewBox="0 0 90 90" fill="none">
            {/* Body */}
            <ellipse cx="45" cy="58" rx="22" ry="18" fill="#c8722a"/>
            {/* Wing */}
            <ellipse cx="38" cy="62" rx="14" ry="9" fill="#a85c1e" transform="rotate(-15 38 62)"/>
            {/* Tail feathers */}
            <path d="M65 55 Q80 40 82 30 Q75 42 70 50 Q78 36 78 24 Q72 38 67 48 Q72 33 68 22 Q64 36 63 50Z" fill="#d4a017"/>
            {/* Neck */}
            <ellipse cx="45" cy="42" rx="11" ry="14" fill="#c8722a"/>
            {/* Head */}
            <circle cx="45" cy="30" r="12" fill="#c8722a"/>
            {/* Comb */}
            <path d="M42 20 Q44 12 46 18 Q48 10 50 17 Q52 8 53 16" stroke="#e53e3e" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Wattle */}
            <path d="M43 35 Q40 42 42 46" stroke="#e53e3e" strokeWidth="3" strokeLinecap="round" fill="none"/>
            {/* Eye */}
            <circle cx="48" cy="28" r="2.5" fill="#1a0e03"/>
            <circle cx="48.8" cy="27.2" r="0.8" fill="white"/>
            {/* Beak */}
            <path d="M54 31 L62 29 L54 34Z" fill="#d4a017"/>
            {/* Legs */}
            <line x1="38" y1="74" x2="35" y2="86" stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="50" y1="74" x2="53" y2="86" stroke="#d4a017" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M29 86 L35 86 L37 82" stroke="#d4a017" strokeWidth="2" strokeLinecap="round"/>
            <path d="M47 86 L53 86 L55 82" stroke="#d4a017" strokeWidth="2" strokeLinecap="round"/>
            {/* Crow lines when crowing */}
            {phase === 'crowing' && (
              <g opacity="0.7">
                <path d="M64 26 L72 22" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M65 30 L74 28" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M63 22 L70 17" stroke="#d4a017" strokeWidth="1.5" strokeLinecap="round"/>
              </g>
            )}
          </svg>
        </div>

        {/* Leaves */}
        <div className="flex gap-3 mb-4">
          {['🌿','🌾','🌿'].map((l, i) => (
            <span key={i} className="text-2xl leaf-sway" style={{ animationDelay: `${i*0.3}s` }}>{l}</span>
          ))}
        </div>

        {/* Logo / Name */}
        <h1 className="font-display text-4xl font-black shimmer-text mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>
          THE VILLAGE MANDI
        </h1>
        <p className="text-yellow-200 text-sm font-light tracking-[0.3em] uppercase mb-5" style={{ opacity: 0.8 }}>
          &amp; Restaurant · Dulapally
        </p>

        {/* Loading dots */}
        <div className="flex items-center gap-1 mt-2">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </div>
    </div>
  )
}
