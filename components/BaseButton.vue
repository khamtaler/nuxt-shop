<template>
  <nuxt-link
    :to="props.link"
    type="button"
    class="rounded-lg bg-indigo-400 px-5 py-2"
  >
    {{ props.text }}
  </nuxt-link>
</template>

<script setup lang="ts">
interface Props {
  text: String
  link: String
}

const props = defineProps<Props>()
</script>

<style lang="scss" scoped></style>
