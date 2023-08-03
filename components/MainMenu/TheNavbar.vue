<template>
  <Menu as="div" class="flex items-center gap-4 md:gap-5">
    <ul class="relative flex gap-1 md:gap-5">
      <BaseMainMenuItem name="shop" link="/shop" />

      <MainMenuDropdown
        name="Categories"
        :categories="categories"
        v-if="categories"
        class="mt-[6px] sm:mt-0"
      />
      <BaseMainMenuItem name="faq" link="/faq" />
    </ul>

    <ClientOnly>
      <font-awesome-icon
        :icon="['fas', 'user']"
        class="cursor-pointer text-base md:text-xl"
        @click="toggleLogin"
      />
      <div class="relative flex align-bottom">
        <font-awesome-icon
          class="cursor-pointer text-base md:text-xl"
          :icon="['fas', 'cart-shopping']"
          @click.stop.prevent="openCart"
        />
        <div
          class="absolute right-[-10px] top-[-13px] flex h-5 w-5 items-center justify-center rounded-full bg-darkblue text-center text-white"
          :class="cartStore.getProductsNumber >= 100 ? 'text-[9px]' : 'text-sm'"
        >
          {{ cartStore.getProductsNumber }}
        </div>
      </div>
    </ClientOnly>
  </Menu>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'
import { useCartStore } from '@/stores/cart'
import { Menu } from '@headlessui/vue'
import { useCategory } from '@/composables/Categories'

const { categories, getCategories } = useCategory()
await getCategories()
const loginStore = useLoginStore()
const cartStore = useCartStore()

const openCart = () => {
  cartStore.toggleModal()
  window.addEventListener('click', toggleModal)
}
function toggleModal() {
  if (cartStore.getModal) {
    cartStore.toggleModal()
    window.removeEventListener('click', toggleModal)
  }
}
const toggleLogin = () => {
  loginStore.toggleOpen()
  document.body.style.overflow = 'hidden'
}
</script>
