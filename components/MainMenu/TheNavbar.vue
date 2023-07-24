<template>
  <menu class="flex items-center gap-5">
    <MainMenuBaseItem
      v-for="(item, index) in itemsList"
      :name="item.text"
      :link="item.link"
      :key="index"
    />
    <ClientOnly>
      <font-awesome-icon
        :icon="['fas', 'user']"
        class="cursor-pointer text-xl"
        @click="store.toggleOpen()"
      />
    </ClientOnly>
  </menu>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'
import { Link } from '@/types/components'

const store = useLoginStore()

const itemsList: Link[] = [
  { text: 'shop', link: '/shop' },
  { text: 'faq', link: '/faq' },
  { text: 'blog', link: '/' },
]
</script>
