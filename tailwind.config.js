/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */

// see https://tailwindcss.com/docs/optimizing-for-production
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {},
            keyframes: {
                shock: {
                    '0%, 5%, 16%, 24%, 32%': { opacity: '1' },
                    '2%, 10%, 20%, 28%, 100%': { opacity: '0' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                }
            },
            animation: {
                shock: 'shock 1000ms forwards ease-in-out',
                wiggle: 'wiggle 1s ease-in-out infinite',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
