<template>
  <div class="flex max-w-6xl gap-7">
    <TopCategoriesTile
      v-for="(cat, index) in categories"
      :key="index"
      :name="cat"
    />
  </div>
</template>

<script setup lang="ts">
import { Image } from '@/types/components'
import { useCategory } from '@/composables/Categories'

const { category: categories, ready, getCategories } = useCategory()
await getCategories(4)
console.log(categories.value)
// const categories: Image[] = [
//   {
//     image: 'rock.png',
//     name: 'Rock 1',
//   },
//   {
//     image: 'rock2.png',
//     name: 'Rock 2',
//   },
//   {
//     image: 'rock3.png',
//     name: 'Rock 3',
//   },
//   {
//     image: 'rock1.png',
//     name: 'Rock 4',
//   },
// ]
</script>

<style scoped></style>
