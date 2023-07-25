<template>
  <div class="flex flex-row items-center justify-around gap-5">
    <figure>
      <img :src="$props.img" :alt="title" class="max-h-[100px]" />
    </figure>
    <div>{{ props.title }}</div>
    <button type="button" @click="cartStore.decreaseCount(props.id)">-</button>
    <div>
      {{ count }}
    </div>

    <button type="button" @click="cartStore.increaseCount(props.id)">+</button>
    <div v-if="count && props.price">${{ count * props.price }}</div>
    <font-awesome-icon
      :icon="['fas', 'trash']"
      @click="cartStore.deleteFromCart(props.id)"
      class="cursor-pointer"
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
