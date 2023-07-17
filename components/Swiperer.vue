<template>
  <div class="my-5">
    <div>
      <Swiper
        :modules="[SwiperAutoplay, SwiperEffectCreative]"
        :slides-per-view="5"
        :loop="true"
        :effect="'slide'"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide
          v-for="(slide, idx) in slides"
          :key="idx"
          :style="`background-color: ${slide.bg}; color: ${slide.color}`"
        >
          {{ idx }}
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
const slides = ref(
  Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // Figure out contrast color for font
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
  }),
)
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 30vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
</style>
