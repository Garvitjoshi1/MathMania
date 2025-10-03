// tailwind.config.js (Enhanced)

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Apple-style palette: Cool gray foundation, one accent color.
        'primary-text': 'hsl(0, 0%, 98%)', // Near-white text on dark mode
        'secondary-text': 'hsl(0, 0%, 50%)', // Muted gray for subtext
        'background-dark': 'hsl(240, 10%, 3%)', // Very dark, near-black background
        'background-light': 'hsl(0, 0%, 100%)', // Pure white background
        'border-subtle': 'hsl(0, 0%, 15%)', // Subtle border color for dark mode
        'accent-main': 'hsl(240, 80%, 65%)', // Vibrant, elegant indigo/blue
      },
      // Use a custom spacing scale for generous whitespace (multiples of 8/10)
      spacing: {
        '18': '4.5rem', 
        '22': '5.5rem',
        '30': '7.5rem',
        '40': '10rem', // Max container padding/margin
      },
    },
    // Set a clean system-UI fallback for Apple's SF Pro feel
    fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], 
    },
  },
  plugins: []
};