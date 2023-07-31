<template>
  <div class="group w-[47%] md:w-[22%]">
    <NuxtLink :to="`/shop/${props.name}`">
      <figure class="relative flex w-full overflow-hidden rounded-lg">
        <img
          :src="`/images/${slugify(props.name)}.jpg`"
          alt="category image"
          class="max-h-[200px] w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div>
          <span
            class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-blurreddark p-5 text-center text-2xl font-bold text-white backdrop-blur-sm"
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
