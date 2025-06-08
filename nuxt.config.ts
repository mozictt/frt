import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // ...
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: '2025-05-15', 
  devtools: { enabled: true },
  devServer: {
    port: 4000,
    host: '0.0.0.0'
  },
  modules: ['shadcn-nuxt', '@nuxt/icon','nuxt-highcharts'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})