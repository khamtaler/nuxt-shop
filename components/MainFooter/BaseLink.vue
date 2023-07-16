<template>
  <li class="py-1">
    <nuxt-link
      :to="props.link"
      class="capitalize after:content-[''] after:h-[4px] after:w-0 after:bg-red-500 after:block after:rounded-lg hover:after:w-full after:transition-[width] inline-block ease-in-out"
      >{{ props.name }}</nuxt-link
    >
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  link: String,
})
</script>
