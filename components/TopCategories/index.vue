<template>
  <div class="w-full">
    <div v-if="wait">
      <p>Loading...</p>
    </div>
    <div
      v-else
      class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5"
    >
      <TopCategoriesTile
        v-for="(category, index) in categories"
        :key="index"
        :name="category"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCategory } from '@/composables/Categories'

const { categories, wait, getCategories } = useCategory()
await getCategories(4)

const images = [
  'electronics.png',
  'jewelety.png',
  'mans-clothing.png',
  'womans-clothing.png',
]
</script>

<style scoped></style>
