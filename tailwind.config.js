/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "modal-popup": "popup  100ms linear forwards",
        "move-in-left": "moveinleft 300ms linear forwards",
        "move-in-right": "moveinright 300ms linear forwards",
      },

      keyframes: {
        popup: {
          "0%": {
            transform: "scale(0.5)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },

        moveinleft: {
          '0%': {
            transform: "translateX(-100%)"
          },
          "100%":{
            transform: "translateX(0%)"
          }
        },

        moveinright: {
          '0%': {
            transform: "translateX(100%)"
          },
          "100%":{
            transform: "translateX(0%)"
          }
        }
      },
    },
  },
  plugins: [],
};
