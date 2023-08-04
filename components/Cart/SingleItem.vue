<template>
  <div
    class="grid grid-cols-12 items-center justify-items-center gap-3 border-b-[1px] py-2"
  >
    <figure class="col-start-1 col-end-3 w-full">
      <img :src="$props.img" :alt="title" class="max-h-[100px] w-full" />
    </figure>
    <div class="col-start-3 col-end-9 justify-self-start">
      {{ props.title }}
    </div>
    <div
      class="col-start-9 col-end-10 flex flex-col items-center justify-center"
    >
      <button type="button" @click.prevent="cartStore.increaseCount(props.id)">
        +
      </button>

      <div>
        {{ count }}
      </div>

      <button type="button" @click.prevent="cartStore.decreaseCount(props.id)">
        -
      </button>
    </div>
    <div v-if="count && props.price" class="col-start-10 col-end-12">
      ${{ count * props.price }}
    </div>
    <font-awesome-icon
      :icon="['fas', 'trash']"
      @click.prevent="cartStore.deleteFromCart(props.id)"
      class="col-start-12 col-end-13 cursor-pointer text-center"
    />
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const props = defineProps<{
  img?: string
  title?: string
  count?: number
  id: string | number
  price?: number
}>()

const cartStore = useCartStore()

const count = computed((): number | undefined => {
  const item = cartStore.getItems.filter((item) => {
    if (item.id === props.id) {
      return item
    } else {
      return
    }
  })
  return item[0].count
})
</script>

<style scoped></style>
