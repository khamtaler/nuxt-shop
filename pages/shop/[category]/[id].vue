<template>
  <div class="mx-auto my-[50px] max-w-5xl">
    <div v-if="wait">Loading...</div>
    <div
      v-else-if="product !== null"
      class="mx-10 grid grid-cols-1 gap-10 md:grid-cols-2"
    >
      <div class="mx-auto w-[50%] px-10 md:w-full">
        <figure>
          <img :src="product.image" :alt="product.image" />
        </figure>
      </div>
      <div>
        <h4 class="text-xl sm:text-2xl md:text-3xl">{{ product.title }}</h4>
        <h5 class="text-base md:text-lg">category: {{ product.category }}</h5>
        <p class="mt-10">{{ product.description }}</p>
        <div class="my-10">
          <BaseStarScore :rating="product.rating" />
          <h6>Price: $ {{ product.price }}</h6>
        </div>
        <BaseAddToCartButton
          text="Add to cart"
          :product="product"
          class="text-center"
        />
      </div>
    </div>
    <div class="my-[100px]">
      <h2 class="text-center text-4xl">View other products</h2>
      <ProductsSwiper :slides="8" :slides-per-view="4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '@/composables/Product'
const route = useRoute()
const { wait, product, fetchProduct } = useProduct()

await fetchProduct(route.params.id)

useHead({
  title: product.value?.title,
})
</script>

<style scoped></style>
