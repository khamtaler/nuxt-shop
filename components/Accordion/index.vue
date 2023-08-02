<template>
  <div class="mx-auto max-w-4xl">
    <AccordionTab
      :title="tab.title"
      :ariaTitle="tab.ariaTitle"
      :tabText="tab.tabText"
      v-for="tab in props.tabs"
    ></AccordionTab>
  </div>
</template>

<script setup lang="ts">
import { Tab } from '@/types/components'
const props = defineProps<{ tabs: Tab[] }>()
</script>

<style scoped></style>
