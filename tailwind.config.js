/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        colorOn:{
          "0%":{
            background:"none"
          },
          "100%":{
             background:"rgb(20, 19, 19,0.5)"
          }
        },
        colorOff:{
          "0%":{
            background:"rgb(20, 19, 19,0.5)",
            display:"block"
          },
          "100%":{
            background:"none",
            display:"none"
          }
        },
        fadeIn:{
          "0%":{
            left:"-100%"
          },
          "100%":{
            left:"0%"
          }
        },
        fadeOut:{
          "0%":{
            left:"0%"
          },
          "100%":{
            left:"-100%"
          }
        }
      },
      animation:{
        colorOn:"colorOn .25s ease 0s 1 forwards",
        colorOff:"colorOff .25s ease 0s 1 forwards",
        fadeIn:"fadeIn .25s ease 0s 1 forwards",
        fadeOut:"fadeOut .25s ease 0s 1 forwards"
      },
    },
  },
  plugins: [],
}

