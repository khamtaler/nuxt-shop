<template>
  <div class="min-h-[100vh]">
    <BaseTextWrite
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
      <ProductsContainer />
      <BaseButton text="View all poroducts" link="shop" />
    </div>

    <div class="mx-5 mt-[100px] flex flex-col items-center">
      <h2 class="text-center text-2xl">View our most selling products!</h2>
      <ProductsSwiper />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
