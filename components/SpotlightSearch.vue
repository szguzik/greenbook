<template>
  <Teleport to="body">
    <transition name="fade">
      <div
          v-if="isOpen"
          class="fixed left-1/2 transform -translate-x-1/2 top-[30px] md:top-[28px] flex items-start justify-center w-full md:w-auto z-50"
          @click="closeSpotlight"
      >
        <div
            class="bg-white rounded-lg shadow-lg p-4 w-[500px] flex items-center space-x-3 relative border border-gray-300"
            @click.stop
        >
          <client-only><FontAwesomeIcon :icon="['fas', 'search']" class="text-gray-500 text-xl" /></client-only>
          <input
              type="text"
              v-model="searchQuery"
              placeholder="Search Research..."
              class="w-full outline-none text-lg text-green-600"
              autofocus
              @keydown.esc="closeSpotlight"
          />
          <button @click="closeSpotlight">
            <client-only><FontAwesomeIcon :icon="['fas', 'times']" class="text-gray-500 text-xl cursor-pointer" /></client-only>
          </button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const searchQuery = ref("")

const openSpotlight = () => {
  isOpen.value = true
}

const closeSpotlight = () => {
  isOpen.value = false
}

// Zamknięcie Spotlight po naciśnięciu ESC
const handleKeydown = (event) => {
  if (event.key === "Escape") {
    closeSpotlight()
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown)
})

// Eksport funkcji do otwierania Spotlight
defineExpose({ openSpotlight })
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>