<template>
  <div class="my-[50px] min-h-[100vh]">
    <div>
      <Head>
        <Title>Shopy</Title>
      </Head>
    </div>
    <BaseTextWrite
      header="Welcome"
      text="Scroll down the page to find our products :)"
    />
    <div class="mx-5 flex flex-col items-center">
      <BaseHeader text="Most viewed categories" />
      <TopCategories />
    </div>
    <div class="mx-5 flex flex-col items-center">
      <BaseHeader text="Our top products" />
      <ShopItemsContainer :number-of-products="6" />
      <BaseButton text="View all poroducts" link="shop" />
    </div>
    <div class="mx-5 mt-[100px] flex flex-col items-center">
      <AboutCompany />
    </div>
    <div class="mx-5 mt-[100px] flex flex-col items-center">
      <BaseHeader text="View our most selling products!" />
      <ProductsSwiper />
    </div>
    <Newsletter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Shopy',
})
</script>

<style lang="scss" scoped></style>
