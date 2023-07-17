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

    <div class="mx-5 flex flex-col items-center">
      <h3 class="my-5 text-center text-5xl">Our Products</h3>
      <ProductsContainer :products="productsList" />
      <BaseButton text="View all poroducts" link="shop" />
    </div>
  </div>
</template>

<script setup lang="ts">
const welcomeText = 'Welcome'
const greetingsText = 'Scroll down the page to find our products :)'
let i = 0
let j = 0
const speed = 100

function writeWelcome() {
  if (i < welcomeText.length && welcomeText) {
    let welcome = document.querySelector('#Welcome') as HTMLHeadingElement
    if (greetingsText.charAt(i) === ' ') {
      welcome.innerHTML += welcomeText.charAt(i)
      i++
      setTimeout(writeWelcome, 0)
      return
    }

    welcome.innerHTML += welcomeText.charAt(i)
    i++
    setTimeout(writeWelcome, speed)
  }
}

function writeGreetings() {
  if (j < greetingsText.length && greetingsText) {
    let greetings = document.querySelector('#Greetings') as HTMLHeadingElement
    if (greetingsText.charAt(j) === ' ') {
      greetings.innerHTML += greetingsText.charAt(j)
      j++
      setTimeout(writeGreetings, 100)
      return
    }

    greetings.innerHTML += greetingsText.charAt(j)
    j++
    setTimeout(writeGreetings, getRandomIntInclusive(50, 200))
  }
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

onMounted(() => {
  writeWelcome()
  setTimeout(() => {
    writeGreetings()
  }, speed * welcomeText.length)
})

interface ProductItem {
  sku: String
  imageUrl: String
  text: String
  desc: String
  price: number
  currency: String
  promotionPrice: number
}

const productsList: ProductItem[] = [
  {
    sku: '1',
    imageUrl: 'rock.png',
    text: 'Product 1',
    desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
    price: 100,
    currency: '$',
    promotionPrice: 90,
  },
  {
    sku: '2',
    imageUrl: 'rock1.png',
    text: 'Product 2',
    price: 900,
    desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
    currency: '$',
    promotionPrice: 900,
  },
  {
    sku: '3',
    imageUrl: 'rock2.png',
    text: 'Product 3',
    price: 800,
    desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
    currency: '$',
    promotionPrice: 400,
  },
  {
    sku: '4',
    imageUrl: 'rock3.png',
    text: 'Product 4',
    price: 110,
    desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
    currency: '$',
    promotionPrice: 90,
  },
  {
    sku: '5',
    imageUrl: 'rock.png',
    text: 'Product 5',
    price: 110,
    desc: 'To najlepszy kamień jest jaki mógłbyś sobie wymyślić!',
    currency: '$',
    promotionPrice: 90,
  },
]
</script>

<style lang="scss" scoped></style>
