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
import { Link } from '../ts/interfaces/link'

const props = defineProps<Link>()
</script>

<style lang="scss" scoped></style>
