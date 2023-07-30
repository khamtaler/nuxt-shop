<template>
  <div class="my-10">
    <div class="text-center">
      <BaseHeader text="Welcome in checkout" />
    </div>
    <div class="mx-auto my-10 flex max-w-7xl flex-row gap-10">
      <CartItemsList class="flex-1" />
      <CheckoutForm class="flex-1" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
