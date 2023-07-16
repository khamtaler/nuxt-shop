<template>
  <menu class="flex gap-5">
    <MainMenuBaseItem
      v-for="(item, index) in itemsList"
      :name="item.text"
      :link="item.link"
      :key="index"
    />
  </menu>
</template>

<script setup lang="ts">
interface MenuItems {
  text: String
  link: String
}

const itemsList: MenuItems[] = [
  { text: 'shop', link: '/' },
  { text: 'faq', link: '/' },
  { text: 'blog', link: '/' },
]
</script>
