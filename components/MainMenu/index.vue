<template>
  <ul
    class="relative flex w-full flex-row items-center justify-between px-5 py-3 shadow-md shadow-lightblue"
  >
    <nuxt-link to="/" aria-label="navigate to homepage">
      <figure>
        <img
          src="/images/logo.webp"
          class="max-h-[40px] md:max-h-[70px]"
          alt="logo"
        />
      </figure>
    </nuxt-link>
    <MainMenuTheNavbar class="hidden md:flex" />
    <Cart class="hidden md:flex" />
    <ClientOnly>
      <div class="block md:hidden">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="cursor-pointer text-xl"
          @click="toggleOpen"
        />
      </div>
    </ClientOnly>
  </ul>
</template>

<script setup lang="ts">
import { usemobileMenuStore } from '@/stores/mobileMenu'
const mobileMenuStore = usemobileMenuStore()

const toggleOpen = () => {
  mobileMenuStore.toggleOpen()
  document.body.style.overflow = 'hidden'
}
</script>

<style lang="scss" scoped></style>
