/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				scroll: 'scroll 35s linear infinite', // Adjust duration as needed
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
			fontFamily: {
				geist: ['var(--font-geist)', 'sans-serif'],
        		geist_mono: ['var(--font-geist-mono)', 'sans-serif'],
				syne: ['var(--font-syne)', 'sans-serif'],
				sora: ['var(--font-sora)', 'sans-serif'],
			},
			backgroundImage: {
                "hero-section": "url('/assets/images/hero-bg-bottom.png'), url('/assets/images/hero-bg.png'), var(--gradient-1)",
                "footer-bg": "url('/assets/images/hero-bg.png'), var(--gradient-1)",
                "development-bg": "url('/assets/images/hero-bg.png'), var(--gradient-2)",
            },
			backgroundColor: {
				"red_gradient": "var(--gradient-2)",
			},
			colors: {
				"blue_light": "#3E3178",
				"blue_logo": "#73b5e8",
				"yellow_logo": "#f7df59",
				"yellow_title": "#fcb900",
			},
			boxShadow: {
				better_boxshadow: '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
			},
		},
	},
	plugins: [],
};
