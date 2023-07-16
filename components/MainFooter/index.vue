<template>
  <footer class="mx-auto my-10 flex max-w-6xl justify-around">
    <div class="flex w-[22%] flex-col">
      <!-- logo component-->
      <nuxt-link to="/">LOGO</nuxt-link>
    </div>
    <ul class="flex w-[22%] flex-col">
      <MainFooterBaseLink
        v-for="item in itemsList"
        :link="item.link"
        :name="item.text"
        class="capital block"
      >
        {{ item.text }}
      </MainFooterBaseLink>
    </ul>
    <ul class="flex w-[22%] flex-col">
      <MainFooterBaseLink
        v-for="item in itemsList"
        :link="item.link"
        :name="item.text"
        class="capital block"
      >
        {{ item.text }}
      </MainFooterBaseLink>
    </ul>
    <div class="block w-[22%]">
      <client-only>
        <nuxt-link to="/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'facebook']"
            class="mx-2 text-4xl"
          />
        </nuxt-link>
        <nuxt-link to="/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            class="mx-2 text-4xl"
          />
        </nuxt-link>
        <nuxt-link to="/" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" class="mx-2 text-4xl" />
        </nuxt-link>
      </client-only>
    </div>
  </footer>
</template>

<script setup lang="ts">
interface FooterItems {
  text: String
  link: String
}

const itemsList: FooterItems[] = [
  { text: 'shop', link: '/' },
  { text: 'faq', link: '/' },
  { text: 'contact', link: '/' },
  { text: 'blog', link: '/' },
]
</script>

<style lang="scss" scoped></style>
