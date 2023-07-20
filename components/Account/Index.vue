<template>
  <Teleport to="body">
    <div
      id="login"
      v-if="openModal"
      class="absolute z-20 min-w-full bg-blurred"
    >
      <main class="min-h-screen min-w-full">
        <section class="container mx-auto px-5 py-24 text-gray-400">
          <AccountRegister :open="openModal" v-if="store.openRegister" />
          <AccountLogin :open="openModal" v-if="store.openLogin" />
        </section>
      </main>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'

const store = useLoginStore()

const openModal = computed(() => {
  return store.getOpen
})
</script>

<style scoped></style>
