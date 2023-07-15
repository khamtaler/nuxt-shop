<template>
  <li
    class="after:content-[''] after:h-[4px] after:w-0 after:bg-red-500 after:block after:rounded-lg hover:after:w-full after:transition-[width] ease-in-out p-3"
  >
    <nuxt-link :to="props.link" class="px-5 uppercase">{{
      props.name
    }}</nuxt-link>
  </li>
</template>

<script setup>
const props = defineProps({
  name: String,
  link: String,
})
</script>

<style lang="scss" scoped></style>
