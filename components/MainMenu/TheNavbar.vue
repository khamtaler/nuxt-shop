<template>
  <ul class="flex gap-5">
    <MainMenuBaseItem
      v-for="(item, index) in itemsList"
      :name="item.text"
      :link="item.link"
      :key="index"
    />
  </ul>
</template>

<script setup lang="ts">
interface MenuItems {
  text: String
  link: String
}

const itemsList: MenuItems[] = [
  { text: 'test', link: 'test' },
  { text: 'test1', link: 'test1' },
  { text: 'test2', link: 'test2' },
]
</script>
