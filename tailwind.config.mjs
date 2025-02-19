import { Mapp } from './app/images';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      backgroundImage: {
        'map': "url('./images/map.png')",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primaryBlack: "#1a1a1a",
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//     container: {
//       center: true,
//     },
//   },
//   plugins: [],
// };
// >>>>>>> origin/ziyodbek
