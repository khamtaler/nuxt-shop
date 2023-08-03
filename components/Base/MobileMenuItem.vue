<template>
  <li class="relative mt-[6px] p-3 sm:mt-0">
    <nuxt-link
      v-if="props.link"
      :aria-label="`navigate to: ${props.link}`"
      class="inline-block cursor-pointer text-sm uppercase ease-in-out after:block after:h-[4px] after:origin-left after:scale-0 after:rounded-lg after:bg-gradient-to-r after:from-lightblue after:to-darkblue after:transition-transform after:duration-500 after:content-[''] hover:after:scale-100 md:text-xl"
      :to="props.link"
      @click="mobileMenuStore.toggleOpen"
    >
      {{ props.name }}
    </nuxt-link>
    <span
      v-else
      class="inline-block cursor-pointer text-sm uppercase ease-in-out after:block after:h-[4px] after:origin-left after:scale-0 after:rounded-lg after:bg-gradient-to-r after:from-lightblue after:to-darkblue after:transition-transform after:duration-500 after:content-[''] hover:after:scale-100 md:text-xl"
    >
      {{ props.name }}
    </span>
  </li>
</template>

<script setup lang="ts">
import { usemobileMenuStore } from '@/stores/mobileMenu'
const mobileMenuStore = usemobileMenuStore()
const props = defineProps({
  name: String,
  link: String,
})
</script>
