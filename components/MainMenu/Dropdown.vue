<template>
  <li class="relative flex items-center justify-center">
    <Menu>
      <MenuButton
        class="cursor-pointer text-sm uppercase ease-in-out after:block after:h-[4px] after:origin-left after:scale-0 after:rounded-lg after:bg-gradient-to-r after:from-lightblue after:to-darkblue after:transition-transform after:duration-500 after:content-[''] hover:after:scale-100 md:text-xl"
      >
        {{ props.name }}
        <client-only>
          <font-awesome-icon
            :icon="['fas', 'angle-down']"
            class="text-large text-lightpurple transition-all"
          />
        </client-only>
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
          class="absolute right-0 top-[100%] w-56 origin-right translate-x-[30%] divide-y divide-gray-100 rounded-b-md bg-white shadow-lg ring-1 ring-sBlack ring-opacity-5 focus:outline-none md:right-0 md:translate-x-0"
        >
          <div class="px-1 py-1">
            <MenuItem
              v-slot="{ active, close }"
              v-for="category in props.categories"
              as="template"
            >
              <div>
                <NuxtLink
                  @click.native="close"
                  :to="`/shop/${category}`"
                  :aria-label="`navigate to ${category} category`"
                  :class="[
                    active ? 'bg-darkblue text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-b-md p-2 text-base capitalize',
                  ]"
                >
                  {{ category }}
                </NuxtLink>
              </div>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </li>
</template>

<script setup lang="ts">
import { MenuButton, MenuItems, MenuItem, Menu } from '@headlessui/vue'
const props = defineProps<{ categories: string[]; name: string }>()
</script>

<style scoped></style>
