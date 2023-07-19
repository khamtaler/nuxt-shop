<template>
  <NuxtLink to="shop">
    <div class="rounded-t-lg border-[1px] border-gray-300">
      <figure>
        <img
          :src="`_nuxt/images/${props.imageUrl}`"
          :alt="props.text"
          class="rounded-t-lg"
        />
      </figure>
      <div class="px-5">
        <h5 class="my-3 text-center text-xl">{{ props.text }}</h5>
        <p class="mb-3">{{ props.desc }}</p>
        <div class="mb-3 flex items-center justify-between">
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
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ProductItem } from '@/ts/interfaces/product'
const props = defineProps<ProductItem>()

const isDiscounted = computed(() => {
  return props.price > props.promotionPrice ? true : false
})
</script>

<style scoped></style>
