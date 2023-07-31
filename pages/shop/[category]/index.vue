<template>
  <div class="my-[50px]">
    <div v-if="wait">Loading...</div>
    <div
      v-else-if="products?.length"
      class="mx-auto my-10 grid max-w-6xl auto-rows-auto grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3"
    >
      <BaseSingleProduct
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :image="prod.image"
        :title="prod.title"
        :price="prod.price"
        :rating="prod.rating"
        :category="prod.category"
        :description="prod.description"
        :desc="prod.category"
      />
    </div>
    <div v-else>Sorry - unfortunatelly Api does not provide this category</div>
  </div>
</template>

<script setup lang="ts">
import { useCategory } from '@/composables/Categories'

const route = useRoute()
const { products, wait, fetchProductsByCategory } = useCategory()

await fetchProductsByCategory(route.params.category as string)

useHead({
  title: `Shopy - ${route.params.category as string}`,
})
</script>

<style scoped></style>
