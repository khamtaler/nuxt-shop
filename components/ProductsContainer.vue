<template>
  <div class="mx-auto my-10 grid max-w-6xl grid-cols-3 gap-5">
    <ShopItemTile
      v-for="item in props.products"
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
interface ProductItem {
  item: {
    sku: String
    imageUrl: String
    text: String
    desc: String
    price: number
    currency: String
    promotionPrice: number
  }
}

const props = defineProps({ products: Object as PropType<ProductItem> })
console.log(props)
</script>

<style scoped></style>
