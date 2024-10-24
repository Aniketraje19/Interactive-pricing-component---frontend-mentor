/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'soft-cyan':'hsl(174, 77%, 80%)',
        'strong-cyan':'hsl(174, 86%, 45%)',
        'light-grayish-red':'hsl(14, 92%, 95%)',
        'light-red':'hsl(15, 100%, 70%)',
        'pale-blue':'hsl(226, 100%, 87%)',
        'my-white':'hsl (0, 0%, 100%)',
        'very-pale-blue':'hsl(230, 100%, 99%)',
        'light-grayish-blue':'hsl(224, 65%, 95%)',
        'grayish-blue':'hsl(225, 20%, 60%)',
        'dark-blue':'hsl(227, 35%, 25%)',
      },
      boxShadow:{
        'box':'0 1rem 2rem 0 var(--light-grayish-blue)',
        'box-dark':'0 2rem 4rem 0 #27272A',
      },
      screens: {
        'xs': { 'max': '539px' }, // Custom breakpoint for less than 540px
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: theme => ({
        'dark-pattern': "url('/static/patterns/bg-pattern-dark.svg')",
        'light-pattern': "url('/static/patterns/bg-pattern.svg')",
      }),
    },
  },
  plugins: [],
};
