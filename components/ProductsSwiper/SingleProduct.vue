<template>
  <div class="group flex h-full">
    <NuxtLink
      :to="`/shop/${props.category}/${props.id}`"
      class="flex h-auto flex-col items-center"
    >
      <figure class="flex items-center justify-center overflow-hidden">
        <img
          :src="props.image"
          :alt="props.title"
          class="block h-[200px] rounded-t-lg object-cover p-5"
          :class="props.imageUrl1 ? 'group-hover:hidden' : ''"
        />
        <img
          v-if="props.imageUrl1"
          :src="`/images/rock.png`"
          :alt="props.title"
          class="hidden h-[200px] rounded-t-lg object-cover p-5 group-hover:block"
        />
      </figure>
      <h5 class="my-3 text-center text-xl">{{ props.title }}</h5>
      <p class="mb-3 px-5 text-center">{{ props.category }}</p>
      <div class="mb-3 mt-auto flex items-center justify-end self-center">
        <div>
          <span
            :class="
              isDiscounted
                ? 'text-md pr-3 text-red-600 line-through'
                : 'text-center text-xl'
            "
          >
            ${{ props.price }}
          </span>
          <span v-if="isDiscounted" class="text-xl text-green-600">
            $ {{ props.promotionPrice }}
          </span>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { ProductItem } from '@/types/components'
const props = defineProps<ProductItem>()

const isDiscounted = computed(() => {
  if (props.promotionPrice && props.price) {
    return props.price > props.promotionPrice ? true : false
  }
})

useHead({
  title: props.title,
})
</script>

<style scoped></style>
