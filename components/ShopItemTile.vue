<template>
  <NuxtLink to="shop" class="grid">
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
        <p>
          {{ props.rating['count'] }} / {{ props.rating['rate'] }}
          <ClientOnly>
            <font-awesome-icon
              class="border-2-yellow text-yellow-400"
              v-for="i in Math.round(props.rating['rate'])"
              :icon="['fas', 'star']"
            />
            <font-awesome-icon
              class="text-yellow-400"
              v-for="i in 5 - Math.round(props.rating['rate'])"
              :icon="['far', 'star']"
            />
          </ClientOnly>
        </p>

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
              <!-- {{ props.currency }} -->
            </span>
            <span v-if="isDiscounted" class="text-xl text-green-600">
              $ {{ props.promotionPrice }}
              <!-- {{ props.currency }} -->
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
  if (props.promotionPrice && props.price) {
    return props.price > props.promotionPrice ? true : false
  }
})
</script>

<style scoped></style>
