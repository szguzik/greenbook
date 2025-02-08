import { defineNuxtPlugin } from '#app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// ORYGINALNE IKONY Z TWOJEGO PLUGINU
import { faUserSecret, faCoffee, faUmbrella } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

// **IKONY Z NAVBARU**
import { faHome, faFileAlt, faFlask, faInfoCircle, faEnvelope, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

// **NOWE IKONY DLA MENU PROFILU**
import { faUserCircle, faUser, faBook, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

// WYŁĄCZ automatyczne CSS – Nuxt ładuje je sam
config.autoAddCss = false

// Dodaj WSZYSTKIE ikony do biblioteki
library.add(
    faUserSecret, faCoffee, faUmbrella, // Stare ikony
    faGithub, faTwitter, // Stare ikony
    faHome, faFileAlt, faFlask, faInfoCircle, faEnvelope, faSearch, faTimes, // Ikony do navbaru
    faUserCircle, faUser, faBook, faCog, faSignOutAlt // **NOWE IKONY DO MENU PROFILU**
)

// Rejestruj FontAwesome jako plugin Nuxt
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})