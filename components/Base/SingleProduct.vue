<template>
  <NuxtLink
    :to="`/shop/${props.category}/${props.id}`"
    class="grid"
    :aria-label="`navigate to ${props.title}`"
  >
    <div
      class="group flex flex-col rounded-lg border-2 border-lightblue hover:border-orange-500"
    >
      <figure class="flex h-[120px] max-h-[200px] items-center justify-center">
        <img
          :src="props.image"
          :alt="props.title"
          class="block h-full max-w-[90%] rounded-t-lg p-5"
          :class="props.imageUrl1 ? 'group-hover:hidden' : ''"
        />
        <img
          v-if="props.imageUrl1"
          :src="`/images/rock.webp`"
          :alt="props.title"
          class="hidden h-full max-w-[90%] rounded-t-lg px-2 py-5 group-hover:block md:px-5"
        />
      </figure>
      <div class="flex h-full flex-col px-2 md:px-5">
        <h5 class="my-3 text-center text-sm md:text-xl">{{ props.title }}</h5>
        <p class="mb-3 text-center text-sm md:text-base">
          {{ props.category }}
        </p>
        <div class="mt-auto">
          <BaseStarScore :rating="props.rating" />

          <div class="mb-3 flex items-center justify-start">
            <div>
              <span
                :class="
                  isDiscounted
                    ? 'pr-3 text-base text-red-600 line-through'
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
