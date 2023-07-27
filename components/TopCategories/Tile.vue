<template>
  <div class="group">
    <NuxtLink :to="`/shop/${slugify(props.name)}`">
      <figure class="relative flex max-h-[150px] overflow-hidden rounded-lg">
        <img
          :src="`_nuxt/images/rock3.png`"
          alt="category image"
          class="rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div>
          <span
            class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-white"
          >
            {{ props.name }}
          </span>
        </div>
      </figure>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>()
</script>

<style scoped></style>
