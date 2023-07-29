<template>
  <div class="relative flex items-center justify-center">
    <MenuButton
      class="cursor-pointer uppercase ease-in-out after:block after:h-[4px] after:w-0 after:rounded-lg after:bg-red-500 after:transition-[width] after:content-[''] hover:after:w-full"
    >
      {{ props.name }}
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 top-[100%] w-56 origin-right divide-y divide-gray-100 rounded-b-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }" v-for="category in props.categories">
            <NuxtLink
              :to="`/shop/${category}`"
              :class="[
                active ? 'bg-gray-500 text-white' : 'text-gray-900',
                'text-md group flex w-full items-center rounded-b-md px-2 py-2',
              ]"
            >
              {{ category }}
            </NuxtLink>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
const props = defineProps<{ categories: string[]; name: string }>()
</script>

<style scoped></style>
