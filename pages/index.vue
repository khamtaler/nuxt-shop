<template>
  <div class="mb-[50px] min-h-[100vh]">
    <div>
      <Head>
        <Title>Shopy</Title>
      </Head>
    </div>
    <BaseTextWrite
      header="Welcome"
      text="Since 2024 providing best clothes :)"
    />
    <div class="mx-5 my-[50px] flex flex-col items-center">
      <BaseHeader text="Most viewed categories" />
      <TopCategories />
    </div>
    <div class="my-[50px] flex flex-col items-center md:mx-5">
      <BaseHeader text="Our top products" />
      <ShopItemsContainer :number-of-products="6" />
      <BaseButton text="View all poroducts" link="shop" />
    </div>
    <div class="mx-5 my-[50px] mt-[100px] flex flex-col items-center">
      <AboutCompany />
    </div>
    <div class="mx-5 my-[50px] mt-[100px] flex flex-col items-center">
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
