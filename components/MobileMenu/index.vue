<template>
  <teleport to="body">
    <div
      v-if="props.isOpen"
      class="absolute right-0 top-0 z-10 h-full w-screen bg-blurreddark md:hidden"
    >
      <div
        class="ml-auto flex h-full w-[200px] origin-right flex-col bg-white pt-[20px] font-bold transition-all duration-500"
        :class="
          slide ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        "
      >
        <ClientOnly>
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            class="mb-[25px] ml-auto mr-5 cursor-pointer text-2xl"
            @click.prevent="toggleOpen"
          />
        </ClientOnly>
        <ul class="flex flex-col">
          <MobileMenuSingleItem
            name="shop"
            link="/shop"
            class="ml-2 list-none"
            @click.prevent="toggleOpen"
          />
          <MobileMenuDropdown
            name="Categories"
            :categories="categories"
            v-if="categories"
            class="ml-2 p-3"
            @navigate="toggleOpen"
          />
          <MobileMenuSingleItem
            name="faq"
            link="/faq"
            class="ml-2 list-none"
            @click.prevent="toggleOpen"
          />
        </ul>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { useCategory } from '@/composables/Categories'

const props = defineProps<{ isOpen: boolean }>()
const { categories, getCategories } = useCategory()
await getCategories()
const slide = ref(false)
const toggleSlide = () => {
  slide.value = !slide.value
}
watch(
  () => props.isOpen,
  () => {
    setTimeout(toggleSlide, 10)
  },
)
const emit = defineEmits(['toggle-open'])
const toggleOpen = () => {
  emit('toggle-open')
  document.body.style.overflow = 'visible'
}
</script>

<style scoped></style>
