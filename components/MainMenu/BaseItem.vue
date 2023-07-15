<template>
  <li
    class="after:content-[''] after:w-0 after:h-[4px] after:bg-red-500 after:block after:rounded-lg hover:after:w-full hover:after:transition-[width] ease-in-out"
  >
    <nuxt-link :to="props.name" class="px-5">{{ props.link }}</nuxt-link>
  </li>
</template>

<script setup>
const props = defineProps({
  name: String,
  link: String,
})
</script>

<style lang="scss" scoped></style>
