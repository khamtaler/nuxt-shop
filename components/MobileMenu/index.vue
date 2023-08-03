<template>
  <teleport to="body">
    <div
      v-if="mobileMenuStore.getOpen"
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
            @click="toggleOpen"
          />
        </ClientOnly>
        <BaseMobileMenuItem
          name="shop"
          link="/shop"
          class="ml-2 inline-block list-none"
        />
        <MobileMenuDropdown
          name="Categories"
          :categories="categories"
          v-if="categories"
          class="ml-2 inline-block p-3"
        />
        <BaseMobileMenuItem
          name="faq"
          link="/faq"
          class="ml-2 inline-block list-none"
        />
        <ClientOnly>
          <div class="mt-5 flex flex-row items-center justify-center gap-5">
            <font-awesome-icon
              :icon="['fas', 'user']"
              class="cursor-pointer text-xl"
              @click="loginStore.toggleOpen()"
            />
            <div class="relative flex align-bottom">
              <NuxtLink to="/checkout">
                <font-awesome-icon
                  class="cursor-pointer text-xl"
                  :icon="['fas', 'cart-shopping']"
                  @click="mobileMenuStore.toggleOpen"
                />
              </NuxtLink>
              <div
                class="absolute right-[-10px] top-[-13px] flex h-5 w-5 items-center justify-center rounded-full bg-darkblue text-center text-white"
                :class="
                  cartStore.getProductsNumber >= 100 ? 'text-[9px]' : 'text-sm'
                "
              >
                {{ cartStore.getProductsNumber }}
              </div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { usemobileMenuStore } from '@/stores/mobileMenu'
import { useLoginStore } from '@/stores/login'
import { useCartStore } from '@/stores/cart'
import { useCategory } from '@/composables/Categories'

const mobileMenuStore = usemobileMenuStore()

const loginStore = useLoginStore()
const cartStore = useCartStore()
const { categories, getCategories } = useCategory()
await getCategories()
const slide = ref(false)
const toggleSlide = () => {
  slide.value = !slide.value
}
watch(
  () => mobileMenuStore.getOpen,
  () => {
    setTimeout(toggleSlide, 10)
  },
)

const toggleOpen = () => {
  mobileMenuStore.toggleOpen()
  document.body.style.overflow = 'visible'
}
</script>

<style scoped></style>
