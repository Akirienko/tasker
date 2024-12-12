// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  components: {
		"dirs": [
			{ "path": "@/components/", "global": true, pathPrefix: false, }
		],
	},
  // devtools: { enabled: true }
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/style/main.css'],
  modules: ['@pinia/nuxt'],
})