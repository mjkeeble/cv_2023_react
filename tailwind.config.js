/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#001b2e",
          100: "#000509",
          200: "#000b12",
          300: "#00101c",
          400: "#001525",
          500: "#001b2e",
          600: "#00518b",
          700: "#0087e8",
          800: "#45b2ff",
          900: "#a2d8ff"
        },
        charcoal: {
          DEFAULT: "#294c60",
          100: "#080f13",
          200: "#111e27",
          300: "#192e3a",
          400: "#213d4d",
          500: "#294c60",
          600: "#407595",
          700: "#639bbc",
          800: "#97bcd2",
          900: "#cbdee9"
        },
        gray: {
          DEFAULT: "#adb6c4",
          100: "#1f232b",
          200: "#3e4755",
          300: "#5d6a80",
          400: "#828fa4",
          500: "#adb6c4",
          600: "#bdc4cf",
          700: "#cdd3db",
          800: "#dee1e7",
          900: "#eef0f3"
        },
        papaya: {
          DEFAULT: "#ffefd3",
          100: "#5d3b00",
          200: "#ba7600",
          300: "#ffaa17",
          400: "#ffcc74",
          500: "#ffefd3",
          600: "#fff2da",
          700: "#fff5e3",
          800: "#fff8ed",
          900: "#fffcf6"
        },
        peach: {
          DEFAULT: "#ffc49b",
          100: "#522200",
          200: "#a34400",
          300: "#f56600",
          400: "#ff9447",
          500: "#ffc49b",
          600: "#ffcfad",
          700: "#ffdbc2",
          800: "#ffe7d6",
          900: "#fff3eb"
        }
      },
      backgroundImage: {
        hero: "url('/images/top-view-colorful-cogwheels-arrangement.jpg')",
        parallax1:
          "linear-gradient(to right bottom, rgba(0, 135, 232,0.6), rgba(255, 196, 155, 0.6)), url('/images/homeOffice-s.png')",
        parallax2:
          "linear-gradient(to left top, rgba(0, 135, 232,0.6), rgba(255, 196, 155, 0.6)), url('/images/vs-code-30-day-streak.png')",
        parallax3:
          "linear-gradient(to right top, rgba(0, 135, 232,0.6), rgba(255, 196, 155, 0.6)), url('/images/RF_rel_map.jpg')",
        parallax4:
          "linear-gradient(to left bottom, rgba(0, 135, 232,0.6), rgba(255, 196, 155, 0.6)), url('/images/010-Blues Jab-14. Juni 2023.jpg')"
      },
      fontFamily: {
        "mjk-bold": ["Mjktitle2-bold", "sans-serif"],
        mjk: ["Mjktitles", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: []
};
