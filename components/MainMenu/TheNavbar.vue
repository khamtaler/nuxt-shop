<template>
  <Menu as="div" class="flex items-center gap-4 md:gap-5">
    <div class="relative flex gap-1 md:gap-5">
      <MainMenuSingleItem name="shop" link="/shop" />

      <MainMenuDropdown
        name="Categories"
        :categories="categories"
        v-if="categories"
        class="mt-[6px] sm:mt-0"
      />
      <MainMenuSingleItem name="faq" link="/faq" />
    </div>
  </Menu>
</template>

<script setup lang="ts">
import { Menu } from '@headlessui/vue'
import { useCategory } from '@/composables/Categories'
const { categories, getCategories } = useCategory()
await getCategories()
</script>
