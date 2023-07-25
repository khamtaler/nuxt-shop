<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div
      v-else
      class="mx-auto my-10 grid max-w-6xl auto-rows-auto grid-cols-3 gap-5"
    >
      <ShopSingleItem
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
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '@/composables/Product'
const props = defineProps<{ numberOfProducts?: number | null }>()

const { fetchProducts, pending, products, error } = useProduct()

onMounted(async () => {
  await fetchProducts(props.numberOfProducts ? props.numberOfProducts : '')
})
</script>
composables/Product
