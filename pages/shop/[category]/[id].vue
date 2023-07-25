<template>
  <div class="mx-auto mt-10 max-w-5xl">
    <div v-if="pending">Loading...</div>
    <div v-else-if="product !== null" class="grid grid-cols-2 gap-10">
      <div class="px-10">
        <figure>
          <img :src="product.image" :alt="product.image" />
        </figure>
      </div>
      <div>
        <h4 class="text-3xl">{{ product.title }}</h4>
        <h5 class="text-lg">category: {{ product.category }}</h5>
        <p class="mt-10">{{ product.description }}</p>
        <div class="my-10">
          <h6>Price: $ {{ product.price }}</h6>
          <BaseStarScore :rating="product.rating" />
        </div>
        <BaseButton text="Add to cart" link="/" />
      </div>
    </div>
    <div class="my-[100px]">
      <h2 class="text-center text-4xl">View other products</h2>
      <ProductsSwiper :slides="8" :slides-per-view="4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProduct } from '@/composables/getProduct'
const route = useRoute()
const { pending, product } = await getProduct(route.params.id)

useHead({
  title: product.value?.title,
})
</script>

<style scoped></style>
