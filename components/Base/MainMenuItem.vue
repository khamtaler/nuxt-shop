<template>
  <li class="p-3">
    <nuxt-link
      :to="props.link"
      class="uppercase ease-in-out after:block after:h-[4px] after:w-0 after:rounded-lg after:bg-red-500 after:transition-[width] after:content-[''] hover:after:w-full"
    >
      {{ props.name }}
    </nuxt-link>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  link: String,
})
</script>
