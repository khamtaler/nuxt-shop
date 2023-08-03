<template>
  <div class="relative">
    <Menu>
      <MenuButton
        class="cursor-pointer text-sm uppercase ease-in-out after:block after:h-[4px] after:origin-left after:scale-0 after:rounded-lg after:bg-gradient-to-r after:from-lightblue after:to-darkblue after:transition-transform after:duration-500 after:content-[''] hover:after:scale-100 md:text-xl"
        @click="
          () => {
            showPanel = !showPanel
          }
        "
      >
        <client-only>
          <font-awesome-icon
            :icon="['fas', 'angle-right']"
            :class="showPanel ? `rotate-90` : ``"
            class="text-large mr-1 text-lightpurple transition-all"
          />
        </client-only>
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
          class="origin-right rounded-b-md bg-white font-normal md:right-0 md:translate-x-0"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }" v-for="category in props.categories">
              <NuxtLink
                :to="`/shop/${category}`"
                :aria-label="`navigate to ${category} category`"
                :class="[
                  active ? 'bg-darkblue text-white' : 'text-gray-900',
                  'group block  w-full items-center rounded-b-md text-sm capitalize',
                ]"
              >
                <span
                  @click="mobileMenuStore.toggleOpen"
                  class="block px-2 py-2"
                >
                  {{ category }}
                </span>
              </NuxtLink>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>

<script setup lang="ts">
import { MenuButton, MenuItems, MenuItem, Menu } from '@headlessui/vue'
import { usemobileMenuStore } from '@/stores/mobileMenu'

const mobileMenuStore = usemobileMenuStore()

const props = defineProps<{ categories: string[]; name: string }>()
const showPanel = ref(false)
</script>

<style scoped></style>
