<template>
  <li class="py-1">
    <nuxt-link
      :to="props.link"
      class="inline-block capitalize ease-in-out after:block after:h-[4px] after:w-0 after:rounded-lg after:bg-gradient-to-r after:from-lightblue after:to-darkblue after:transition-[width] after:content-[''] hover:after:w-full"
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
