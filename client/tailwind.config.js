/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        village: {
          brown:     '#4a2c0a',
          darkbrown: '#2d1a05',
          amber:     '#c8722a',
          gold:      '#d4a017',
          cream:     '#f5f0e8',
          green:     '#2d5016',
          lightgreen:'#4a7c23',
          sand:      '#e8d5b0',
          clay:      '#b85c2a',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'texture': "url('/textures/wood.png')",
      }
    }
  },
  plugins: []
}
