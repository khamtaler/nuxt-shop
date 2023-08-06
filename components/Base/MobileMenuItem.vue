<template>
  <li class="relative mt-[6px] inline-block list-disc sm:mt-0">
    <nuxt-link
      v-if="props.link"
      :aria-label="`navigate to: ${props.link}`"
      class="block cursor-pointer p-3 text-sm uppercase ease-in-out after:block after:h-[4px] after:origin-left after:scale-0 after:rounded-lg after:bg-gradient-to-r after:from-lightblue after:to-darkblue after:transition-transform after:duration-500 after:content-[''] hover:after:scale-100 md:text-xl"
      :to="props.link"
      @click.prevent="navigate"
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
import { useMobileMenuStore } from '@/stores/mobileMenu'
const mobileMenuStore = useMobileMenuStore()
const props = defineProps({
  name: String,
  link: String,
})

const navigate = () => {
  mobileMenuStore.toggleOpen()
  document.body.style.overflow = 'visible'
}
</script>
