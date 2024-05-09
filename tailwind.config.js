/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      maxHeight: {
        '50': '50vh',
        '60': '60vh',
        '64': '64vh',
        '68': '68vh',
        '72': '72vh',
        '76': '76vh',
        '80': '80vh',
      },
      margin: {
        '72': '18rem',
        '76': '19rem',
        '98': '24.5rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem'
      }
    },
  },
  daisyui: {
    themes: [ {  
        mytheme: {   
            "primary": "#ff00ab",            
            "secondary": "#005bff",         
            "accent": "#00e4b8",
            "neutral": "#1f2b31",
            "base-100": "#f9faff",
            "base-200": "#c2c2c2",
            "base-300": "#6f6f6f",
            "base-400": "#6f6f6f",
            "info": "#00cbe9",
            "success": "#6e9900",
            "warning": "#e85b00",
            "error": "#eb5168",
            "b1": "#1d232a"
        },
      },
      'dark'
    ],
  },
plugins: [require("daisyui")]
}

