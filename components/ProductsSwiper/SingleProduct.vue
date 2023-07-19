<template>
  <div class="group">
    <NuxtLink to="/shop">
      <figure>
        <img
          :src="`_nuxt/images/${props.imageUrl}`"
          :alt="props.text"
          class="block group-hover:hidden"
        />
        <img
          :src="`_nuxt/images/${props.imageUrl1}`"
          :alt="props.text"
          class="hidden group-hover:block"
        />
      </figure>
      <h5 class="my-3 text-center text-xl">{{ props.text }}</h5>
      <p class="mb-3 px-5 text-center">{{ props.desc }}</p>
      <div class="mb-3 flex flex-col items-center justify-between">
        <div>
          <span
            :class="
              isDiscounted
                ? 'text-md pr-3 text-red-600 line-through'
                : 'text-xl'
            "
          >
            {{ props.price }}{{ props.currency }}
          </span>
          <span v-if="isDiscounted" class="text-xl text-green-600">
            {{ props.promotionPrice }}{{ props.currency }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ProductItem } from '@/ts/interfaces/product'
const props = defineProps<ProductItem>()

const isDiscounted = computed(() => {
  return props.price > props.promotionPrice ? true : false
})
</script>

<style scoped></style>
