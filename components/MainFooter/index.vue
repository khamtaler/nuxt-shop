<template>
  <footer class="border-t-2">
    <div
      class="mx-auto my-10 flex max-w-6xl flex-col items-center justify-around md:flex-row"
    >
      <div class="flex max-w-[50%] flex-col md:w-[33%]">
        <nuxt-link to="/" aria-label="navigate to homepage">
          <figure>
            <img
              src="/images/logo.webp"
              alt="logo"
              class="mx-auto max-h-[100px] w-full md:w-auto"
            />
          </figure>
        </nuxt-link>
      </div>
      <ul class="mt-5 flex w-[33%] flex-col text-lg md:mt-0">
        <BaseFooterLink
          v-for="item in itemsList"
          :link="item.link"
          :text="item.text"
          :aria-label="`navigate to ${item.text}`"
          class="capital block text-center md:text-left"
        >
          {{ item.text }}
        </BaseFooterLink>
      </ul>

      <div class="mt-5 block w-[50%] md:w-[33%]">
        <div class="flex items-center justify-center gap-3">
          <nuxt-link
            to="/"
            target="_blank"
            aria-label="navigate to our instagram"
          >
            <ClientOnly>
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="text-4xl"
              />
            </ClientOnly>
          </nuxt-link>
          <nuxt-link
            to="/"
            target="_blank"
            aria-label="navigate to our facebook"
          >
            <client-only>
              <font-awesome-icon
                :icon="['fab', 'facebook-f']"
                class="mx-2 text-4xl"
              />
            </client-only>
          </nuxt-link>

          <nuxt-link
            to="/"
            target="_blank"
            aria-label="navigate to our twitter"
          >
            <ClientOnly>
              <font-awesome-icon :icon="['fab', 'twitter']" class="text-4xl" />
            </ClientOnly>
          </nuxt-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Link } from '@/types/components'

const itemsList: Link[] = [
  { text: 'shop', link: '/shop' },
  { text: 'faq', link: '/faq' },
]
</script>

<style lang="scss" scoped></style>
