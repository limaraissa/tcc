/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'fundo':'#000718',
        'vermelho':'#AF1225',
        'white': 'rgb(255 255 255);',
        'gray': '#3C3C3C',
        'bluee':'#010D2C',
        'azul-claro':'#3563D2',
        'red': 'rgba(175, 18, 37, 0.75)',
        'reed': '#D4132B',
        'whitee' : 'rgba(255, 255, 255, 0.75)',
        'whiteee' : 'rgba(255, 255, 255, 0.5)',
      },
      fontFamily:{
        poppins :['Poppins', 'sans-serif'],
      },
      fontSize:{
        '2x20' :'7rem',
      },
      margin:{
        '50' : '39rem',
        '100' : '55rem',
      },
      width:{
        '80' : '10rem',
      },
    },
  },
  plugins: [],
}
