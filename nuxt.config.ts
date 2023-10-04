// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/style/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/style/_variables.scss"; @import "@/assets/style/_mixins.scss"; @import "@/assets/style/_utilities.scss";',
        },
      },
    },
  },
});
