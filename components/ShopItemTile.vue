<template>
  <div>
    <figure>
      <img :src="`_nuxt/images/${props.imageUrl}`" :alt="props.text" />
    </figure>
    <h5 class="my-3 text-center text-xl">{{ props.text }}</h5>
    <p class="mb-3">{{ props.desc }}</p>
    <div class="mb-3 flex items-center justify-between">
      <div>
        <span
          :class="
            isDiscounted ? 'text-md pr-3 text-red-600 line-through' : 'text-xl'
          "
        >
          {{ props.price }}{{ props.currency }}
        </span>
        <span v-if="isDiscounted" class="text-xl text-green-600">
          {{ props.promotionPrice }}{{ props.currency }}
        </span>
      </div>
      <BaseButton
        class="hover:bg-orange-600 hover:text-white"
        text="View"
        link="/"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  sku: string
  imageUrl: string
  text: string
  desc: String
  price: number
  currency: String
  promotionPrice: number
}
const props = defineProps<Props>()

const isDiscounted = computed(() => {
  return props.price > props.promotionPrice ? true : false
})
</script>

<style scoped></style>
