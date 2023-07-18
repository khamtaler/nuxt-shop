<template>
  <div class="mx-auto my-10 grid max-w-6xl grid-cols-3 gap-5">
    <ShopItemTile
      v-for="item in itemsToShow"
      :key="item.sku"
      :sku="item.sku"
      :imageUrl="item.imageUrl"
      :text="item.text"
      :price="item.price"
      :desc="item.desc"
      :currency="item.currency"
      :promotionPrice="item.promotionPrice"
    />
  </div>
</template>

<script setup lang="ts">
interface Product {
  sku: String
  imageUrl: String
  text: String
  desc: String
  price: number
  currency: String
  promotionPrice?: number
}
interface ProductItems extends Array<Product> {}

const props = defineProps({ products: Object as PropType<ProductItems> })

const itemsToShow = computed(() => {
  return props.products?.slice(0, 6)
})
console.log(props.products)
console.log(itemsToShow.value)
</script>

<style scoped></style>
