<template>
  <form
    ref="register"
    class="preserve3d rotateX-180 mx-auto mt-10 flex flex-col rounded-lg border-2 border-orange-500 bg-darkblue p-28 shadow-lg transition-transform duration-500 md:mt-0 md:w-1/2 lg:w-3/6"
  >
    <h2 class="mb-5 text-2xl font-medium text-white">Register</h2>
    <!-- Email input -->
    <div class="relative mb-4">
      <label for="email" class="text-sm leading-7 text-gray-200">Email</label>
      <div class="relative">
        <input
          :disabled="props.open ? false : true"
          type="text"
          id="email"
          name="email"
          placeholder="e.g. example@email.com"
          class="w-full rounded border border-white bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-300 focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
        />
      </div>
    </div>
    <!-- Password input -->
    <div class="relative mb-4">
      <label for="password" class="text-sm leading-7 text-gray-200">
        Password
      </label>
      <div class="relative">
        <input
          :disabled="props.open ? false : true"
          type="password"
          id="password"
          name="password"
          class="w-full rounded border border-white bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-orange-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
        />
      </div>
    </div>
    <!-- Confirm Password input -->
    <div class="relative mb-4">
      <label for="confirmPassword" class="text-sm leading-7 text-gray-200">
        Confirm password
      </label>
      <div class="relative">
        <input
          :disabled="props.open ? false : true"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          class="w-full rounded border border-white bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
        />
      </div>
    </div>
    <button
      :disabled="props.open ? false : true"
      type="submit"
      class="mt-10 rounded border-0 bg-orange-500 px-8 py-2 font-bold text-white transition-colors duration-500 hover:bg-lightblue focus:outline-none"
    >
      Submit
    </button>
    <p class="mt-2 text-gray-200">
      Already got account?
      <span @click="loginStore.toggleLoginRegister" class="font-bold">
        Sign in!
      </span>
    </p>
  </form>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/stores/login'

const loginStore = useLoginStore()
const register = ref<HTMLFormElement | null>(null)
const props = defineProps({
  open: Boolean,
})

function addClass() {
  if (register.value) {
    register.value.classList.add('right')
  }
}
onMounted(() => {
  setTimeout(addClass, 10)
})
</script>

<style scoped></style>
