// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        title: 'منصة Algerian Tech Makers ',
        meta: [
          { hid: 'description', name: 'description', content: 'هذا وصف منصة Algerian Tech makers' },
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon2.png'  },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'  }
        ],
    }
  },
  devtools: { enabled: true },
  css: [
    '@/assets/css/main.css',
  ],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@nuxt/image", 'nuxt-particles'],
  plugins: [
    { src: '~/plugins/aos.js', mode: 'client' }
  ],
})