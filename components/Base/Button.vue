<template>
  <div>
    <nuxt-link
      v-if="props.link"
      :to="props.link"
      type="button"
      class="transition-scale group rounded-lg border-4 border-darkblue bg-lightblue bg-gradient-to-r px-7 py-3 text-xl text-white duration-300 ease-in-out hover:bg-darkblue"
    >
      <client-only>
        <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
      </client-only>

      {{ props.text }}
      <client-only>
        <font-awesome-icon :icon="['fas', 'arrow-left-long']" />
      </client-only>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { Link } from '@/types/components'

const props = defineProps<Link>()
</script>

<style lang="scss" scoped></style>
