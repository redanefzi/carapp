// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  imports: {
    dirs: ["./stores"],
  },
});
