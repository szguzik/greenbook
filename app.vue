<template>
  <div>
    <nav class="bg-green-600 text-white px-4 md:px-6 flex items-center justify-between h-[56px]">
      <!-- Logo -->
      <div class="flex items-center space-x-3 h-full">
        <img src="@/assets/images/logo-biale.png" alt="GreenBook Logo" class="h-full w-auto max-h-[40px]" />
        <span class="text-xl md:text-2xl font-bold">GreenBook</span>
      </div>

      <!-- Menu desktop -->
      <ul class="hidden lg:flex space-x-4 text-base xl:text-lg">
        <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
          <client-only><FontAwesomeIcon :icon="['fas', 'home']" /></client-only>
          <span>Home</span>
        </a></li>
        <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
          <client-only><FontAwesomeIcon :icon="['fas', 'file-alt']" /></client-only>
          <span>Articles</span>
        </a></li>
        <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200" @click.prevent="openSpotlight">
          <client-only><FontAwesomeIcon :icon="['fas', 'flask']" /></client-only>
          <span>Research</span>
        </a></li>
        <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
          <client-only><FontAwesomeIcon :icon="['fas', 'info-circle']" /></client-only>
          <span>About</span>
        </a></li>
        <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
          <client-only><FontAwesomeIcon :icon="['fas', 'envelope']" /></client-only>
          <span>Contact</span>
        </a></li>
      </ul>

      <!-- Prawa strona - profil i menu mobilne -->
      <div class="flex items-center space-x-3">
        <!-- Ikona profilu -->
        <div class="relative" ref="profileMenuContainer">
          <button @click="toggleProfileMenu" class="flex items-center space-x-2 hover:text-gray-200 cursor-pointer">
            <client-only><FontAwesomeIcon :icon="['fas', 'user-circle']" class="text-2xl" /></client-only>
            <span class="hidden xl:inline">Profile</span>
          </button>

          <!-- Menu profilu z animacją -->
          <transition name="fade-slide">
            <div v-if="isProfileMenuOpen" class="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
              <ul class="py-2 text-sm">
                <li><a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200">
                  <client-only><FontAwesomeIcon :icon="['fas', 'user']" /></client-only>
                  <span>My Profile</span>
                </a></li>
                <li><a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200">
                  <client-only><FontAwesomeIcon :icon="['fas', 'book']" /></client-only>
                  <span>My Articles</span>
                </a></li>
                <li><a href="#" class="flex items-center space-x-2 px-4 py-2 hover:bg-gray-200">
                  <client-only><FontAwesomeIcon :icon="['fas', 'cog']" /></client-only>
                  <span>Settings</span>
                </a></li>
                <li><a href="#" class="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-gray-200">
                  <client-only><FontAwesomeIcon :icon="['fas', 'sign-out-alt']" /></client-only>
                  <span>Logout</span>
                </a></li>
              </ul>
            </div>
          </transition>
        </div>

        <!-- Menu mobilne (ikonka burgera) -->
        <button @click="toggleMenu" class="lg:hidden relative z-50 cursor-pointer">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu mobilne rozwijane z animacją -->
    <transition name="slide-down">
      <div v-if="isMenuOpen" class="absolute top-[56px] left-0 w-full bg-green-600 text-white p-4 lg:hidden z-40">
        <ul class="text-lg space-y-3">
          <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
            <client-only><FontAwesomeIcon :icon="['fas', 'home']" /></client-only>
            <span>Home</span>
          </a></li>
          <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
            <client-only><FontAwesomeIcon :icon="['fas', 'file-alt']" /></client-only>
            <span>Articles</span>
          </a></li>
          <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200" @click.prevent="openSpotlight">
            <client-only><FontAwesomeIcon :icon="['fas', 'flask']" /></client-only>
            <span>Research</span>
          </a></li>
          <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
            <client-only><FontAwesomeIcon :icon="['fas', 'info-circle']" /></client-only>
            <span>About</span>
          </a></li>
          <li><a href="#" class="flex items-center space-x-2 hover:text-gray-200">
            <client-only><FontAwesomeIcon :icon="['fas', 'envelope']" /></client-only>
            <span>Contact</span>
          </a></li>
        </ul>
      </div>
    </transition>

    <!-- Komponent Spotlight Search -->
    <SpotlightSearch ref="spotlight" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SpotlightSearch from '@/components/SpotlightSearch.vue'

const spotlight = ref(null)

const openSpotlight = () => {
  if (spotlight.value) {
    spotlight.value.openSpotlight()
  }
}

// Menu profilu – działa tak samo jak openSpotlight
const isProfileMenuOpen = ref(false)
const profileMenuContainer = ref(null)

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}

const closeProfileMenu = (event) => {
  if (isProfileMenuOpen.value && profileMenuContainer.value && !profileMenuContainer.value.contains(event.target)) {
    isProfileMenuOpen.value = false
  }
}

// Event do zamykania po kliknięciu poza menu
onMounted(() => {
  document.addEventListener('click', closeProfileMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeProfileMenu)
})

// Menu mobilne – rozwijane, a nie pełnoekranowe
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
/* Animacja dla menu profilu */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Animacja dla menu mobilnego */
.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.2s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>