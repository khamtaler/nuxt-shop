<template>
  <li class="relative p-3">
    <nuxt-link
      v-if="props.link"
      class="cursor-pointer uppercase ease-in-out after:block after:h-[4px] after:w-0 after:rounded-lg after:bg-red-500 after:transition-[width] after:content-[''] hover:after:w-full"
      :to="props.link"
    >
      {{ props.name }}
    </nuxt-link>
    <span
      v-else
      class="cursor-pointer uppercase ease-in-out after:block after:h-[4px] after:w-0 after:rounded-lg after:bg-red-500 after:transition-[width] after:content-[''] hover:after:w-full"
    >
      {{ props.name }}
    </span>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  link: String,
})
</script>
