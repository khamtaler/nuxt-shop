<template>
  <Teleport to="body">
    <div
      v-if="loginStore.getOpen"
      class="absolute z-20 min-w-full bg-blurreddark"
    >
      <main class="min-h-screen min-w-full">
        <div
          class="container mx-auto px-5 py-24 text-gray-400"
          @click.prevent="toggleLogin"
        >
          <AccountRegister
            :open="loginStore.getOpen"
            v-if="loginStore.openRegister"
            @click.stop.prevent
          />
          <AccountLogin
            :open="loginStore.getOpen"
            v-if="loginStore.openLogin"
            @click.stop.prevent
          />
        </div>
      </main>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'

const loginStore = useLoginStore()
const toggleLogin = () => {
  loginStore.toggleOpen()
  document.body.style.overflow = 'visible'
}
</script>

<style scoped></style>
