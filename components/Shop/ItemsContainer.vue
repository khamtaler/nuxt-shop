<template>
  <div class="mx-auto max-w-6xl">
    <div>
      <div v-if="pending">Loading...</div>
      <div
        v-else
        class="mx-[20px] my-10 grid auto-rows-auto grid-cols-2 gap-5 md:mx-[50px] md:grid-cols-3"
      >
        <BaseSingleProduct
          v-for="prod in products"
          :key="prod.id"
          :id="prod.id"
          :image="prod.image"
          :imageUrl1="prod.imageUrl1"
          :title="prod.title"
          :price="prod.price"
          :rating="prod.rating"
          :category="prod.category"
          :description="prod.description"
          :desc="prod.category"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '@/composables/Product'
const props = defineProps<{ numberOfProducts?: number | null }>()

const { fetchProducts, wait: pending, products, error } = useProduct()

await fetchProducts(props.numberOfProducts ? props.numberOfProducts : '')
</script>
