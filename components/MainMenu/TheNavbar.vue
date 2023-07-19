<template>
  <menu class="flex gap-5">
    <MainMenuBaseItem
      v-for="(item, index) in itemsList"
      :name="item.text"
      :link="item.link"
      :key="index"
    />
    <font-awesome-icon :icon="['fas', 'user']" />
  </menu>
</template>

<script setup lang="ts">
import { Link } from '@/ts/interfaces/link'

const itemsList: Link[] = [
  { text: 'shop', link: '/' },
  { text: 'faq', link: '/' },
  { text: 'blog', link: '/' },
]
</script>
