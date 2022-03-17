module.exports = {
  content: ['./index.html'],
  darkMode:'class',
  theme: {
    extend: {
      container:{
        center:true,
        padding:'5rem'
      },
      colors:{
        'merah-dasar':'#90181A'
      },
      fontFamily:{
        'poppins':'Poppins, sans-serif',
        'caveat':'Caveat, cursive'
      },

      // KEYFRAME
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartbeat:{
          '0%,100%':{transform:'scale(1.2)'},
          '50%':{transform: 'scale(1)'},
        },
        phonering:{
          '0%,100%':{transform:'rotate(3deg) translateY(-10%)'},
          '50%':{transform: 'rotate(-3deg) translateY(0)'},
        },
        slowpulse:{
          '0%,100%':{opacity:'1'},
          '5%':{opacity:'0.5',transform:'translateY(20%)'},
        },
        transx:{
          '0%, 100%': { transform: 'translateX(90%)' },
          '50%': { transform: 'translateX(0%)' },
        },
        widthx:{
          '0%, 100%': { width:'0rem',transform:'rotate(180deg)' },
          '50%': { width:'9.5rem' },
        }
      },

      // ANIMATION
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        heartbeat:'heartbeat 1s ease-in infinite',
        phonering:'phonering 1s ease-in infinite',
        slowpulse:'slowpulse 3s ease-out infinite',
        transx:'transx 4s ease-in-out infinite',
        widthx:'widthx 4s ease-in infinite'
      },
    },
  },
  plugins: [],
}
