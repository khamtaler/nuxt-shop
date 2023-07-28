<template>
  <li class="relative p-3">
    <nuxt-link
      :to="props.link ? props.link : '/'"
      class="uppercase ease-in-out after:block after:h-[4px] after:w-0 after:rounded-lg after:bg-red-500 after:transition-[width] after:content-[''] hover:after:w-full"
      @click="props.name === 'categories' ? togglevisible() : ''"
    >
      {{ props.name }}
    </nuxt-link>
    <div v-if="!wait">
      <div
        v-if="props.name === 'categories' && visible"
        class="absolute right-[50%] top-[100%] flex translate-x-[50%] flex-col bg-white"
      >
        <NuxtLink
          v-if="props.name === 'categories'"
          v-for="category in categories"
          class="w-[200px] cursor-pointer px-5 py-3 hover:bg-gray-400"
          :to="`/shop/${category}`"
          @click="
            () => {
              visible = !visible
            }
          "
        >
          {{ category }}
        </NuxtLink>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useCategory } from '@/composables/Categories'

const { categories, wait, getCategories } = useCategory()
const visible = ref(false)

const props = defineProps({
  name: String,
  link: String,
})

if (props.name === 'categories') {
  await getCategories()
}

const togglevisible = () => {
  visible.value = !visible.value
}
</script>
