<template>
  <div class="min-h-[100vh]">
    <div
      class="grid min-h-[400px] items-stretch justify-stretch bg-[url('@/public/images/wallpaper.png')]"
    >
      <div
        class="flex h-full w-full items-center justify-center bg-gradient-to-r from-transparent via-black to-transparent"
      >
        <div class="p-6 text-center text-white">
          <h2 id="Welcome" class="mb-5 text-5xl"></h2>
          <p id="Greetings"></p>
          <font-awesome-icon
            :icon="['fas', 'chevron-down']"
            class="mt-10 animate-bounce text-4xl"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const welcomeText = 'Welcome'
const greetingsText = 'Scroll down the page to find our products :)'
let i = 0
let j = 0
const speed = 100

function typeWriterWelcome() {
  if (i < welcomeText.length) {
    if (greetingsText.charAt(i) === ' ') {
      document.querySelector('#Welcome').innerHTML += welcomeText.charAt(i)
      i++
      setTimeout(typeWriterWelcome, 0)
      return
    }
    document.querySelector('#Welcome').innerHTML += welcomeText.charAt(i)
    i++
    setTimeout(typeWriterWelcome, speed)
  }
}

function typeWriterGreetings() {
  if (j < greetingsText.length) {
    if (greetingsText.charAt(j) === ' ') {
      document.querySelector('#Greetings').innerHTML += greetingsText.charAt(j)
      j++
      setTimeout(typeWriterGreetings, 100)
      return
    }
    document.querySelector('#Greetings').innerHTML += greetingsText.charAt(j)
    j++
    setTimeout(typeWriterGreetings, getRandomIntInclusive(50, 200))
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) // The maximum is inclusive and the minimum is inclusive
}

onMounted(() => {
  typeWriterWelcome()
  setTimeout(() => {
    typeWriterGreetings()
  }, speed * welcomeText.length)
})
</script>

<style lang="scss" scoped></style>
