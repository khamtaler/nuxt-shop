<template>
  <form
    ref="login"
    class="preserve3d mx-auto mt-10 flex origin-bottom flex-col rounded-lg border-4 border-lightpurple bg-lightblue px-5 py-10 shadow-lg transition-transform duration-500 md:mt-0 md:w-1/2 md:px-10 lg:w-3/6"
  >
    <h3 class="mb-5 text-3xl font-medium text-white">Login</h3>
    <!-- Email input -->
    <div class="relative mb-4">
      <label for="email" class="text-base leading-7 text-gray-100">Email</label>
      <div class="relative">
        <input
          :disabled="props.open ? false : true"
          type="text"
          id="email"
          name="email"
          placeholder="e.g. example@email.com"
          class="w-full rounded border-2 border-white bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-300 focus:border-lightpurple focus:bg-transparent focus:ring-2 focus:ring-transparent"
        />
      </div>
    </div>
    <!-- Password input -->
    <div class="relative mb-4">
      <label for="password" class="text-base leading-7 text-gray-100">
        Password
      </label>
      <div class="relative">
        <input
          :disabled="props.open ? false : true"
          type="password"
          id="password"
          name="password"
          class="focus:borderlightpurple w-full rounded border-2 border-white bg-transparent bg-opacity-20 px-3 py-1 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-lightpurple focus:bg-transparent focus:ring-2 focus:ring-transparent"
        />
      </div>
    </div>

    <button
      :disabled="props.open ? false : true"
      type="submit"
      class="mt-10 rounded border-0 bg-lightpurple px-8 py-2 font-bold text-white transition-colors duration-500 hover:bg-darkpurple focus:outline-none"
    >
      Login
    </button>
    <p class="mt-2 text-center text-gray-200">
      Not having an account?
      <span
        @click.prevent="$emit('switch-modal')"
        class="cursor-pointer font-bold"
      >
        Register!
      </span>
    </p>
  </form>
</template>

<script setup lang="ts">
const login = ref<HTMLFormElement | null>(null)

const props = defineProps({
  open: Boolean,
})

function addClass() {
  if (login.value) {
    login.value.classList.add('left')
  }
}
onMounted(() => {
  setTimeout(addClass, 10)
})
</script>

<style scoped></style>
