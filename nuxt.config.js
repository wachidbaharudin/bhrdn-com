export default {
  buildModules: ['@nuxtjs/tailwindcss'],
  target: 'static',
  head: {
    title: 'Wachid Baharudin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
}