import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
        '@nuxtjs/google-fonts', // Dodaj moduł
    ],
    googleFonts: {
        families: {
            Poppins: [300, 400, 700], // Wybierz wagi czcionki
            Roboto: [300, 400, 700],
            Montserrat: [300, 400, 700],
        },
        display: 'swap', // Optymalizacja ładowania
        preconnect: true, // Poprawa wydajności
    },
    devtools: { enabled: true },

    css: [
        '~/assets/css/main.css',
        '@fortawesome/fontawesome-svg-core/styles.css',
        '@/assets/scss/main.scss'
    ],

    vite: {
        plugins: [
            tailwindcss()
        ],
    },
    app: {
        // Ustawiamy podstawową ścieżkę aplikacji
        baseURL: '/greenbook/', // Dodaj nazwę repozytorium
    },
})