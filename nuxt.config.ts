// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  plugins: [{ src: '~/plugins/amplify.ts' }],

  alias: {
    "./runtimeConfig": "./runtimeConfig.browser"
  },

  runtimeConfig: {
    public: {
      appBaseUrl: process.env.APP_BASE_URL,
      apiServerURL: process.env.API_BASE_URL,
      jwtIdTokenKey: process.env.JWT_ID_TOKEN_KEY,
      jwtRefreshTokenKey: process.env.JWT_REFRESH_TOKEN_KEY,
    }
  },

  vite:{
    define: {
      global: "window"
    }
  },
})
