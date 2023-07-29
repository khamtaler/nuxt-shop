<template>
  <div
    class="flex min-h-[400px] bg-[url('@/images/club1.png')] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="mx-auto my-[50px] grid max-w-5xl grid-cols-2 content-center rounded-lg border-2 border-black bg-[rgba(255,255,255,0.7)] p-10"
    >
      <div
        class="flex items-center justify-center px-10 text-black opacity-100"
      >
        <input
          type="email"
          placeholder="your@email.com"
          class=":placeholder:text-white w-full rounded-lg border-2 border-white bg-black p-4 text-white"
          v-model="email"
        />
      </div>
      <div class="text-center text-black opacity-100">
        <h3 class="mb-5 text-center text-3xl font-bold uppercase">
          Newsletter
        </h3>
        <p class="text-center text-xl">
          By sharing your email with us You're opening Your inbox for newest
          promotions.
        </p>
        <button
          type="submit"
          @click.prevent="saveEmail"
          class="mt-5 rounded-lg border-2 border-white bg-black px-4 py-2 text-lg uppercase text-white"
        >
          Save me!
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref(null)
const saveEmail = () => {
  if (email.value) {
    alert(email.value)
  }
}
</script>

<style scoped></style>
