<template>
  <div class="grid max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-2">
    <div>
      <figure class="overflow-hidden">
        <img
          src="/images/club2.webp"
          alt="company people"
          class="aspect-square rounded-xl object-cover"
        />
      </figure>
    </div>
    <div class="text-center">
      <BaseHeader text="About us" />
      <p class="text-xl">
        At Shoppy, we believe that fashion is an expression of individuality and
        style. Our passion for all things chic and trendy drives us to curate a
        diverse collection of clothing that speaks to the unique personality of
        every fashion enthusiast.
      </p>
      <BaseButton text="Check store" link="/shop" class="mt-10" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
