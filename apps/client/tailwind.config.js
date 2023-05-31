/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            shade: {
                50: 'var(--shade-50)',
                100: 'var(--shade-100)',
                200: 'var(--shade-200)',
                300: 'var(--shade-300)',
                400: 'var(--shade-400)',
                500: 'var(--shade-500)',
                600: 'var(--shade-600)',
                700: 'var(--shade-700)',
                800: 'var(--shade-800)',
                900: 'var(--shade-900)',
                950: 'var(--shade-950)',
            },
        },
        extend: {},
    },
    plugins: [],
}
