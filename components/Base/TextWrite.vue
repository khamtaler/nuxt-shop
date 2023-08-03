<template>
  <div
    class="grid min-h-[300px] items-stretch justify-stretch bg-[url('/images/wallpaper.webp')] shadow-md shadow-lightblue md:min-h-[400px]"
  >
    <div
      class="flex h-full w-full items-center justify-center bg-gradient-to-r from-blurreddark via-black to-blurreddark md:from-transparent md:via-black md:to-transparent"
    >
      <div class="p-6 text-center text-white">
        <h2 id="Welcome" class="mb-5 text-5xl"></h2>
        <p id="Greetings"></p>
        <ClientOnly>
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="mt-10 animate-bounce text-4xl"
          />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Header } from '@/types/components'

const props = defineProps<Header>()
let i = 0
let j = 0
const speed = 100
let headerText = props.header
let welcomeText = props.text
function writeWelcome(text: string): void {
  if (i < text.length && text) {
    let welcome = document.querySelector('#Welcome') as HTMLHeadingElement
    if (text.charAt(i) === ' ') {
      welcome.innerHTML += text.charAt(i)
      i++
      setTimeout(writeWelcome, 0)
      return
    }

    welcome.innerHTML += text.charAt(i)
    i++
    setTimeout(() => {
      writeWelcome(headerText)
    }, speed)
  }
}

function writeGreetings(text: string): void {
  if (j < text.length && text) {
    let greetings = document.querySelector('#Greetings') as HTMLHeadingElement
    if (text.charAt(j) === ' ') {
      greetings.innerHTML += text.charAt(j)
      j++
      setTimeout(() => {
        writeGreetings(welcomeText)
      }, 100)
      return
    }

    greetings.innerHTML += text.charAt(j)
    j++
    setTimeout(
      () => writeGreetings(welcomeText),
      getRandomIntInclusive(50, 200),
    )
  }
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

onMounted(() => {
  writeWelcome(headerText)
  setTimeout(
    () => {
      writeGreetings(welcomeText)
    },
    speed * (headerText.length + 2),
  )
})

onUnmounted(() => {
  headerText = ''
  welcomeText = ''
})
</script>

<style scoped></style>
