<template>
  <menu class="flex items-center gap-5">
    <BaseMainMenuItem
      v-for="(item, index) in itemsList"
      :name="item.text"
      :link="item.link"
      :key="index"
    />
    <ClientOnly>
      <font-awesome-icon
        :icon="['fas', 'user']"
        class="cursor-pointer text-xl"
        @click="loginStore.toggleOpen()"
      />
      <font-awesome-icon
        class="cursor-pointer text-xl"
        :icon="['fas', 'cart-shopping']"
        @click="cartStore.toggleModal"
      />
    </ClientOnly>
  </menu>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'
import { useCartStore } from '@/stores/cart'
import { Link } from '@/types/components'

const loginStore = useLoginStore()
const cartStore = useCartStore()

const itemsList: Link[] = [
  { text: 'shop', link: '/shop' },
  { text: 'categories' },
  { text: 'faq', link: '/faq' },
  { text: 'blog', link: '/' },
]
</script>
