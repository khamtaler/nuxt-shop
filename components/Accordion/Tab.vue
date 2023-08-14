<template>
  <div class="mb-2 rounded-xl border-l-2 border-r-2 border-t-2 bg-gray-200 p-2">
    <button
      type="button"
      @click.prevent="togglePanel"
      class="ml-auto block w-full p-4 text-left text-xl"
      :aria-label="props.ariaTitle"
    >
      <client-only>
        <font-awesome-icon
          :icon="['fas', 'angle-right']"
          :class="showPanel ? `rotate-90` : ``"
          class="text-large mr-3 text-lightpurple transition-all"
        />
      </client-only>
      {{ props.title }}
    </button>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div class="rounded-xl bg-gray-100 p-5" v-if="showPanel">
        <p>{{ props.tabText }}</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { AccordionTab } from '@/types/components'

const props = defineProps<AccordionTab>()
const showPanel = ref(false)
const togglePanel = () => {
  showPanel.value = !showPanel.value
}
</script>

<style scoped></style>
