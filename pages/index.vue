<template>
  <div class="min-h-[100vh]">
    <div
      class="grid min-h-[400px] items-stretch justify-stretch bg-[url('@/images/wallpaper.png')]"
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
    <div>
      <ShopItemTile
        v-for="item in productsList"
        :key="item.sku"
        :sku="item.sku"
        :imageUrl="item.imageUrl"
        :text="item.text"
        :price="item.price"
        :promotionPrice="item.promotionPrice"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const welcomeText = 'Welcome'
const greetingsText = 'Scroll down the page to find our products :)'
let i = 0
let j = 0
const speed = 100

function typeWriterWelcome() {
  if (i < welcomeText.length && welcomeText) {
    let welcome = document.querySelector('#Welcome') as HTMLHeadingElement
    if (greetingsText.charAt(i) === ' ') {
      welcome.innerHTML += welcomeText.charAt(i)
      i++
      setTimeout(typeWriterWelcome, 0)
      return
    }

    welcome.innerHTML += welcomeText.charAt(i)
    i++
    setTimeout(typeWriterWelcome, speed)
  }
}

function typeWriterGreetings() {
  if (j < greetingsText.length && greetingsText) {
    let greetings = document.querySelector('#Greetings') as HTMLHeadingElement
    if (greetingsText.charAt(j) === ' ') {
      greetings.innerHTML += greetingsText.charAt(j)
      j++
      setTimeout(typeWriterGreetings, 100)
      return
    }

    greetings.innerHTML += greetingsText.charAt(j)
    j++
    setTimeout(typeWriterGreetings, getRandomIntInclusive(50, 200))
  }
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

onMounted(() => {
  typeWriterWelcome()
  setTimeout(() => {
    typeWriterGreetings()
  }, speed * welcomeText.length)
})

interface ProductItem {
  sku: String
  imageUrl: String
  text: String
  price: Number
  promotionPrice: Number
}

const productsList: ProductItem[] = [
  {
    sku: '1',
    imageUrl: '/',
    text: 'Product 1',
    price: 100,
    promotionPrice: 90,
  },
  {
    sku: '2',
    imageUrl: '/',
    text: 'Product 2',
    price: 900,
    promotionPrice: 900,
  },
  {
    sku: '3',
    imageUrl: '/',
    text: 'Product 3',
    price: 800,
    promotionPrice: 400,
  },
  {
    sku: '4',
    imageUrl: '/',
    text: 'Product 4',
    price: 110,
    promotionPrice: 90,
  },
  {
    sku: '5',
    imageUrl: '/',
    text: 'Product 5',
    price: 110,
    promotionPrice: 90,
  },
]
</script>

<style lang="scss" scoped></style>
