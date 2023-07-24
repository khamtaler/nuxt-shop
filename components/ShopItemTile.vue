<template>
  <NuxtLink :to="`shop/${props.category}/${props.id}`" class="grid">
    <div class="group grid flex-col rounded-t-lg border-[1px] border-gray-300">
      <figure class="flex items-center justify-center">
        <img
          :src="props.image"
          :alt="props.title"
          class="block h-[200px] max-w-[90%] rounded-t-lg p-5 group-hover:hidden"
        />
        <img
          :src="`_nuxt/images/rock.png`"
          :alt="props.title"
          class="hidden max-h-[200px] max-w-[90%] rounded-t-lg p-5 group-hover:block"
        />
      </figure>
      <div class="flex h-auto flex-col px-5">
        <h5 class="my-3 text-center text-xl">{{ props.title }}</h5>
        <p class="mb-3">{{ props.category }}</p>
        <BaseStarScore :rating="props.rating" />

        <div class="mb-3 flex items-center justify-between">
          <div>
            <span
              :class="
                isDiscounted
                  ? 'text-md pr-3 text-red-600 line-through'
                  : 'text-xl'
              "
            >
              ${{ props.price }}
            </span>
            <span v-if="isDiscounted" class="text-xl text-green-600">
              $ {{ props.promotionPrice }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ProductItem } from '@/types/components'
const props = defineProps<ProductItem>()

const isDiscounted = computed(() => {
  if (props.promotionPrice && props.price) {
    return props.price > props.promotionPrice ? true : false
  }
})
</script>

<style scoped></style>
