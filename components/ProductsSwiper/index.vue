<template>
  <div class="mx-auto my-5 max-w-6xl">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="props.slidesPerView ? props.slidesPerView : 4"
      :loop="true"
      :space-between="20"
      :effect="'slide'"
      :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }"
    >
      <div v-if="!pending">Loading...</div>
      <SwiperSlide v-else v-for="product in products">
        <ProductsSwiperSingleProduct
          :key="product.id"
          :id="product.id"
          :image="product.image"
          :imageUrl1="product.imageUrl1"
          :title="product.title"
          :price="product.price"
          :rating="product.rating"
          :category="product.category"
          :description="product.description"
          :desc="product.category"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { useProduct } from '@/composables/Product'
interface Props {
  slides?: number
  slidesPerView?: number
}

const props = defineProps<Props>()
const { fetchProducts, ready: pending, products: products } = useProduct()

onMounted(async () => {
  await fetchProducts(props.slides ? props.slides : 8)
})
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: auto;
  padding: 10px;
}
.swiper-wrapper {
  min-width: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
</style>
composables/Product
