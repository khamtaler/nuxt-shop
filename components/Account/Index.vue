<template>
  <Teleport to="body">
    <div
      v-if="props.isAccountModalOpen"
      class="absolute z-20 min-w-full bg-blurreddark"
    >
      <main class="min-h-screen min-w-full">
        <div
          class="container mx-auto px-5 py-24 text-gray-400"
          @click.stop.prevent="closeModal"
        >
          <AccountRegister
            :open="!props.isLoginOpen"
            v-if="!props.isLoginOpen"
            @switch-modal="switchModal"
            @click.stop.prevent
          />
          <AccountLogin
            :open="props.isLoginOpen"
            v-if="props.isLoginOpen"
            @switch-modal="switchModal"
            @click.stop.prevent
          />
        </div>
      </main>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  isLoginOpen: boolean
  isAccountModalOpen: boolean
}>()

const emit = defineEmits(['switch-modal', 'close-modal'])
const switchModal = () => {
  emit('switch-modal')
}
const closeModal = () => {
  emit('close-modal')
}
</script>

<style scoped></style>
