<template>
  <div
    class="flex min-h-[400px] items-center justify-center bg-[url('/images/club1.webp')] bg-cover bg-center bg-no-repeat"
  >
    <div
      class="bg-blur border-sBlack mx-5 my-[50px] grid max-w-5xl grid-cols-1 content-center rounded-lg border-2 bg-[rgba(255,255,255,0.7)] p-10 md:grid-cols-2"
    >
      <div
        class="text-sBlack mb-10 flex items-center justify-center px-10 opacity-100 md:mt-0"
      >
        <input
          type="email"
          placeholder="your@email.com"
          class=":placeholder:text-white bg-sBlack w-full rounded-lg border-2 border-white p-4 text-white"
          v-model="email"
        />
      </div>
      <div class="text-sBlack text-center opacity-100">
        <h4 class="mb-5 text-center text-3xl font-bold uppercase">
          Newsletter
        </h4>
        <p class="text-center text-xl">
          By sharing your email with us You're opening Your inbox for newest
          promotions.
        </p>
        <button
          type="submit"
          @click.prevent="saveEmail"
          class="bg-sBlack mt-5 rounded-lg border-2 border-white px-4 py-2 text-lg uppercase text-white"
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
    alert(
      `We are sorry, backend is not ready for that action, but provided - not validated email is: ${email.value}`,
    )
  }
}
</script>

<style scoped></style>
