<template>
  <div
    class="relative flex w-full flex-row items-center justify-between px-5 py-3 shadow-md shadow-lightblue"
  >
    <ul>
      <nuxt-link to="/" aria-label="navigate to homepage">
        <figure>
          <img
            src="/images/logo.webp"
            class="max-h-[40px] md:max-h-[70px]"
            alt="logo"
          />
        </figure>
      </nuxt-link>
    </ul>
    <div class="flex items-center justify-center gap-6 md:gap-5">
      <MainMenuTheNavbar class="hidden md:flex" />
      <ClientOnly>
        <font-awesome-icon
          :icon="['fas', 'user']"
          class="cursor-pointer text-base md:text-xl"
          @click.prevent="openAccountModal"
        />
        <div class="relative flex align-bottom">
          <font-awesome-icon
            class="cursor-pointer text-base md:text-xl"
            :icon="['fas', 'cart-shopping']"
            :isOpen="isCartOpen"
            @click.stop.prevent="openCart"
          />

          <div
            class="absolute right-[-10px] top-[-13px] flex h-5 w-5 items-center justify-center rounded-full bg-darkblue text-center text-white"
            :class="
              cartStore.getProductsNumber >= 100 ? 'text-[9px]' : 'text-sm'
            "
          >
            {{ cartStore.getProductsNumber }}
          </div>
        </div>
      </ClientOnly>
      <ClientOnly>
        <div class="block md:hidden">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="cursor-pointer text-xl"
            @click.prevent="toggleOpen()"
          />
        </div>
      </ClientOnly>
    </div>
    <MobileMenu :isOpen="openMobileMenu" @toggle-open="toggleOpen" />
    <Cart :isOpen="isCartOpen" @toggle-open="toggleModal" />
    <Account
      :isLoginOpen="isLoginOpen"
      @switch-modal="switchModal"
      @close-modal="closeModal"
      :isAccountModalOpen="isAccountModalOpen"
    />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const isCartOpen = ref(false)
const isLoginOpen = ref(false)
const isAccountModalOpen = ref(false)

const openCart = () => {
  isCartOpen.value = !isCartOpen.value
  window.addEventListener('click', toggleModal)
}
function toggleModal() {
  if (isCartOpen.value) {
    isCartOpen.value = !isCartOpen.value
    window.removeEventListener('click', toggleModal)
  }
}
const openAccountModal = () => {
  isLoginOpen.value = !isLoginOpen.value
  isAccountModalOpen.value = true
  document.body.style.overflow = 'hidden'
}
const switchModal = () => {
  isLoginOpen.value = !isLoginOpen.value
}
const closeModal = () => {
  isAccountModalOpen.value = false
  isLoginOpen.value = false
  document.body.style.overflow = 'visible'
}
const openMobileMenu = ref(false)
const toggleOpen = () => {
  openMobileMenu.value = !openMobileMenu.value
}
</script>

<style lang="scss" scoped></style>
