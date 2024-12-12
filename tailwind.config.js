/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  // corePlugins: {
  //   preflight: false,
  // },
	variants: {
		extend: {
			opacity: ['hover'],
			translate: ['group-hover'],
		},
	},
	theme: {
		screens: {
					xs: "400px",
					sm: "640px",
					md: "768px",
					lg: "1024px",
					tablet: "1200px",
					xl: "1280px",
					"macbook-13": "1440px",
					"2xl": "1600px",
        },
        extend: {
            colors: {
              palette: {
                orange: "#F7910E",
              },
            },
            fontFamily: {
              sans: ['Inter', 'Arial', 'sans-serif'],
            },
        },
    },
};