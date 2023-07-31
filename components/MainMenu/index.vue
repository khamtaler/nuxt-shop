<template>
  <div
    class="relative flex w-full flex-row items-center justify-between px-5 py-3 shadow-md shadow-lightblue"
  >
    <nuxt-link to="/">
      <figure>
        <img src="/images/logo.png" class="max-h-[70px]" alt="logo" />
      </figure>
    </nuxt-link>
    <MainMenuTheNavbar />
    <Cart />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
