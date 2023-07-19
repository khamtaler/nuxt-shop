<template>
  <div class="group">
    <nuxt-link to="/shop">
      <figure class="relative flex max-h-[150px] overflow-hidden rounded-lg">
        <img
          :src="`_nuxt/images/${props.image}`"
          :alt="props.image"
          class="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div>
          <span
            class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white"
          >
            {{ props.name }}
          </span>
        </div>
      </figure>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { Image } from '@/ts/interfaces/image'
const props = defineProps<Image>()
</script>

<style scoped></style>
