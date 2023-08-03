<template>
  <div v-if="props.rating !== undefined" class="mb-3">
    <p class="text-xs md:text-base">
      {{ props.rating.count }} / {{ props.rating.rate }}
    </p>
    <p class="text-xs md:text-base">
      <ClientOnly>
        <font-awesome-icon
          class="border-2-yellow text-yellow-400"
          v-for="i in Math.round(props.rating.rate)"
          :icon="['fas', 'star']"
        />
        <font-awesome-icon
          class="text-yellow-400"
          v-for="i in 5 - Math.round(props.rating.rate)"
          :icon="['far', 'star']"
        />
      </ClientOnly>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Rating {
  rating:
    | {
        rate: number
        count: number
      }
    | undefined
}

const props = defineProps<Rating>()
</script>

<style scoped></style>
