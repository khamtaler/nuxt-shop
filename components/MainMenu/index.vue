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
    <MainMenuTheNavbar class="hidden md:flex" />

    <ClientOnly>
      <div class="block md:hidden">
        <font-awesome-icon
          :icon="['fas', 'bars']"
          class="cursor-pointer text-xl"
          @click.prevent="toggleOpen()"
        />
      </div>
    </ClientOnly>
    <MobileMenu :isOpen="openMobileMenu" @toggle-open="toggleOpen" />
  </div>
</template>

<script setup lang="ts">
const openMobileMenu = ref(false)
const toggleOpen = () => {
  console.log(openMobileMenu.value)
  openMobileMenu.value = !openMobileMenu.value
  console.log(openMobileMenu.value)
}
</script>

<style lang="scss" scoped></style>
