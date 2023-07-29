<template>
  <Menu as="div" class="flex items-center gap-5">
    <ul class="relative flex gap-5">
      <BaseMainMenuItem name="shop" link="/shop" />
      <MainMenuDropdown
        name="Categories"
        :categories="categories"
        v-if="categories"
      />
      <BaseMainMenuItem name="faq" link="/faq" />
      <BaseMainMenuItem name="blog" link="/" />
    </ul>

    <ClientOnly>
      <font-awesome-icon
        :icon="['fas', 'user']"
        class="cursor-pointer text-xl"
        @click="loginStore.toggleOpen()"
      />
      <font-awesome-icon
        class="cursor-pointer text-xl"
        :icon="['fas', 'cart-shopping']"
        @click="cartStore.toggleModal"
      />
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
</script>
