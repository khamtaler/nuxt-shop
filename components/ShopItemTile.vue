<template>
  <div>
    <figure><img :src="props.imageUrl" :alt="props.text" /></figure>
    <h6>{{ props.text }}</h6>
    <p>
      <span :class="isDiscounted ? 'line-through' : ''">{{ props.price }}</span>
      <span v-if="props.price > props.promotionPrice">
        {{ props.promotionPrice }}
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  sku: string
  imageUrl: string
  text: string
  price: number
  promotionPrice: number
}
const props = defineProps<Props>()

const isDiscounted = computed(() => {
  return props.price > props.promotionPrice ? true : false
})
</script>

<style scoped></style>
