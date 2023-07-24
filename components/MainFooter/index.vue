<template>
  <footer class="border-t-2">
    <div class="mx-auto my-10 flex max-w-6xl justify-around">
      <div class="flex w-[22%] flex-col">
        <!-- logo component-->
        <nuxt-link to="/">LOGO</nuxt-link>
      </div>
      <ul class="flex w-[22%] flex-col">
        <BaseFooterLink
          v-for="item in itemsList"
          :link="item.link"
          :name="item.text"
          class="capital block"
        >
          {{ item.text }}
        </BaseFooterLink>
      </ul>
      <ul class="flex w-[22%] flex-col">
        <BaseFooterLink
          v-for="item in itemsList"
          :link="item.link"
          :name="item.text"
          class="capital block"
        >
          {{ item.text }}
        </BaseFooterLink>
      </ul>
      <div class="block w-[22%]">
        <h5 class="mb-3">Socials</h5>
        <client-only>
          <nuxt-link to="/" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="mr-2 text-4xl"
            />
          </nuxt-link>
          <nuxt-link to="/" target="_blank">
            <ClientOnly>
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="mx-2 text-4xl"
              />
            </ClientOnly>
          </nuxt-link>
          <nuxt-link to="/" target="_blank">
            <ClientOnly>
              <font-awesome-icon
                :icon="['fab', 'twitter']"
                class="ml-2 text-4xl"
              />
            </ClientOnly>
          </nuxt-link>
        </client-only>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Link } from '@/types/components'

const itemsList: Link[] = [
  { text: 'shop', link: '/' },
  { text: 'faq', link: '/' },
  { text: 'contact', link: '/' },
  { text: 'blog', link: '/' },
]
</script>

<style lang="scss" scoped></style>
