const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            fontFamily: {
                'playfair': ["var(--font-playfair)", "serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                "dark": '#232A3C',
                "darkBackground": '#242124',
                "medium": '#293245',
                'harga': '#5B8C51'
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
};
