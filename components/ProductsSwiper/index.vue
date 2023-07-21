<template>
  <div class="mx-auto my-5 max-w-6xl">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="4"
      :loop="true"
      :space-between="20"
      :effect="'slide'"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
    >
      <SwiperSlide v-for="item in products">
        <ProductsSwiperSingleProduct
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
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ProductItems } from '@/ts/interfaces/product'
import axiosClient from '@/axiosClient'
// const props = defineProps({ products: Object as PropType<ProductItems> })
const products = ref<ProductItems>()
onMounted(async () => {
  await axiosClient
    .get('/products?limit=8')
    .then(({ data }) => {
      products.value = data
      console.log(products.value)
    })
    .catch((err) => {
      console.log(err)
      // throw createError({
      //   statusCode: 404,
      //   statusMessage: 'Product has not been found',
      // })
    })
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: auto;
}
.swiper-wrapper {
  min-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
