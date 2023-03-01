// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vant/nuxt',
        'nuxt-swiper'
    ],
    css: [
        // 'tailwindcss/dist/tailwind.min.css',
        '~/assets/css/tailwind.css'
    ],
    app: {
        head: {
            title: 'KhoaHoc.tv: Khoa học - Công nghệ - Tri Thức - Khám phá',
            meta: [
                {
                    name: 'description', content: 'Everything about Nuxt 3'
                }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
            ],
        },
    },
    runtimeConfig: {
        currencyKey: process.env.CURRENCY_API_KEY,
    }
})
