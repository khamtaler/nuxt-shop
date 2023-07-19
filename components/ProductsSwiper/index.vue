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
      <SwiperSlide v-for="slide in props.products">
        <ProductsSwiperSingleProduct
          :key="slide.sku"
          :sku="slide.sku"
          :imageUrl="slide.imageUrl"
          :text="slide.text"
          :price="slide.price"
          :desc="slide.desc"
          :currency="slide.currency"
          :promotionPrice="slide.promotionPrice"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ProductItems } from '@/ts/interfaces/product'

const props = defineProps({ products: Object as PropType<ProductItems> })
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.swiper-wrapper {
  min-width: 100%;
  width: 100%;
}
</style>
