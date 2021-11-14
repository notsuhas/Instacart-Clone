module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			eina: "Eina, sans-serif",
		},
		extend: {
			colors: {
				primary: "#0AAD0A",
			},
			flex: {
				2: "2 2 0%",
			},
			zIndex: {
				"-1": "-1",
				1: "1",
			},
			backgroundImage: {
				"hero-lg": "url('./assets/images/HeroImageLG.jpg')",
				"hero-mb": "url('./assets/images/HeroImageMB.jpg')",
				"stats-lg": "url('./assets/images/HomePageStatsLG.jpg')",
				"stats-mb": "url('./assets/images/HomePageStatsMB.webp')",
			},
			gridTemplateColumns: {
				fluid: "repeat(auto-fit, minmax(340px, 1fr))",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("tailwind-scrollbar-hide")],
};
