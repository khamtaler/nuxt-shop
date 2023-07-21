<template>
  <div class="mx-auto my-10 grid max-w-6xl grid-cols-3 gap-5">
    <ShopItemTile
      v-for="item in products"
      :key="item.id"
      :sku="item.id"
      :image="item.image"
      :imageUrl1="item.imageUrl1"
      :title="item.title"
      :price="item.price"
      :rating="item.rating"
      :category="item.category"
      :description="item.description"
      :desc="item.category"
    />
  </div>
</template>

<script setup lang="ts">
import { ProductItems } from '@/ts/interfaces/product'
import axiosClient from '@/axiosClient'

// const props = defineProps({ products: Object as PropType<ProductItems> })
let products = ref<ProductItems | null>(null)
// const itemsToShow = computed(() => {
//   return props.products?.slice(0, 6)
// })

onMounted(async () => {
  await axiosClient
    .get('/products?limit=6')
    .then(({ data }) => {
      products.value = data
      console.log(data)
    })
    .catch((err) => {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product has not been found',
      })
    })
})
</script>

<style scoped></style>
