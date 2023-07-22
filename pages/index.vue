<template>
  <div class="min-h-[100vh]">
    <AutomaticTextWrite
      header="Welcome"
      text="Scroll down the page to find our products :)"
    />
    <div class="mx-5 flex flex-col items-center">
      <h3 class="my-5 text-center text-5xl underline">
        Most viewed categories
      </h3>
      <TopCategories />
    </div>
    <div class="mx-5 flex flex-col items-center">
      <h3 class="my-5 text-center text-5xl underline">Our top products</h3>
      <ProductsContainer :products="productsList" />
      <BaseButton text="View all poroducts" link="shop" />
    </div>

    <div class="mx-5 mt-[100px] flex flex-col items-center">
      <h2 class="text-center text-2xl">View our most selling products!</h2>
      <ProductsSwiper :products="productsList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductItem } from '@/ts/interfaces/product'

// const productsList: ProductItem[] = [
//   {
//     sku: '1',
//     imageUrl: 'rock.png',
//     imageUrl1: 'rock1.png',
//     text: 'Product 1',
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     price: 100,
//     currency: '$',
//     promotionPrice: 90,
//   },
//   {
//     sku: '2',
//     imageUrl: 'rock.png',
//     imageUrl1: 'rock1.png',
//     text: 'Product 2',
//     price: 900,
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     currency: '$',
//     promotionPrice: 900,
//   },
//   {
//     sku: '3',
//     imageUrl: 'rock2.png',
//     imageUrl1: 'rock1.png',
//     text: 'Product 3',
//     price: 800,
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     currency: '$',
//     promotionPrice: 400,
//   },
//   {
//     sku: '4',
//     imageUrl: 'rock.png',
//     imageUrl1: 'rock2.png',
//     text: 'Product 4',
//     price: 110,
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     currency: '$',
//     promotionPrice: 90,
//   },
//   {
//     sku: '5',
//     imageUrl: 'rock3.png',
//     imageUrl1: 'rock2.png',
//     text: 'Product 5',
//     price: 110,
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     currency: '$',
//     promotionPrice: 90,
//   },
//   {
//     sku: '6',
//     imageUrl: 'rock.png',
//     imageUrl1: 'rock3.png',
//     text: 'Product 6',
//     price: 800,
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     currency: '$',
//     promotionPrice: 400,
//   },
//   {
//     sku: '7',
//     imageUrl: 'rock1.png',
//     imageUrl1: 'rock2.png',
//     text: 'Product 7',
//     price: 110,
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     currency: '$',
//     promotionPrice: 90,
//   },
//   {
//     sku: '8',
//     imageUrl: 'rock3.png',
//     imageUrl1: 'rock.png',
//     text: 'Product 8',
//     price: 110,
//     desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
//     currency: '$',
//     promotionPrice: 90,
//   },
// ]
</script>

<style lang="scss" scoped></style>
