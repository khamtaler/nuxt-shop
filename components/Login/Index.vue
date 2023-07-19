<template>
  <Teleport to="body">
    <div id="login" v-if="open" class="absolute z-20 min-w-full bg-blurred">
      <main class="min-h-screen min-w-full">
        <section class="container mx-auto px-5 py-24 text-gray-400">
          <form
            class="mx-auto mt-10 flex w-full flex-col rounded-lg bg-[#000000ff] bg-opacity-50 p-8 shadow-lg md:mt-0 md:w-1/2 lg:w-2/6"
          >
            <h2 class="mb-5 text-lg font-medium text-[#aac8e4]">Register</h2>
            <!-- Email input -->
            <div class="relative mb-4">
              <label for="email" class="text-sm leading-7 text-gray-400">
                Email
              </label>
              <div class="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="e.g. example@email.com"
                  class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                />
              </div>
            </div>
            <!-- Password input -->
            <div class="relative mb-4">
              <label for="password" class="text-sm leading-7 text-gray-400">
                Password
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                />
              </div>
            </div>
            <!-- Confirm Password input -->
            <div class="relative mb-4">
              <label
                for="confirmPassword"
                class="text-sm leading-7 text-gray-400"
              >
                Confirm password
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  class="w-full rounded border border-gray-600 bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
                />
              </div>
            </div>
            <button
              type="submit"
              class="rounded border-0 bg-blue-500 px-8 py-2 font-bold text-[#213547] transition-colors duration-500 hover:bg-blue-600 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/login'

const store = useCounterStore()
const open = computed(() => {
  return store.getLogin
})
</script>

<style scoped></style>
