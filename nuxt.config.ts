// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  components: {
		"dirs": [
			{ "path": "@/components/", "global": true, pathPrefix: false, }
		],
	},
  app: {
    head: {
      title: 'Best todo list',
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png',
        },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['@/assets/style/main.css'],
  modules: ['@pinia/nuxt'],
})