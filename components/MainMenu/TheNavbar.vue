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
      <div class="relative flex align-bottom">
        <font-awesome-icon
          class="cursor-pointer text-xl"
          :icon="['fas', 'cart-shopping']"
          @click="cartStore.toggleModal"
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
</script>
