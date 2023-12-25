/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {

    fontSize: {
      xs: '12px',
      sm: '16px',
      lg: '20px',
      xl: '24px', 
      '2xl': '32px',
      '3xl': '40px',
      '4xl': '48px',
      '5xl': '60px',
      '6xl': '72px',
      '7xl': '80px',
    },
    

    extend: {

      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        display: ['DM Serif Display', 'serif']
      },

      colors: {
        'primary': "#F1F1F1",
        "secondary": "#333333",
        "accent": "#C1434C",
      },

      boxShadow: {
         'element1': "0px 12px 42px -4px rgba(24, 39, 75, 0.12)",
         'element2': "0px 8px 18px -6px rgba(24, 39, 75, 0.12)",
          'image': "0px 18px 88px -4px rgba(24, 39, 75, 0.14), 0px 8px 28px -6px rgba(24, 39, 75, 0.12)"
      },

      screens: {
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px', 
        // => @media (min-width: 1440px) { ... }

        
    },
  },
},
  plugins: [],
}

