<template>
  <div
    class="checkout grid grid-cols-12 rounded-md border-2 border-lightpurple p-5"
  >
    <div class="relative col-start-1 col-end-7 my-2 flex flex-col">
      <label
        class="absolute mb-2 px-2 transition-all duration-75"
        :class="
          formData.firstName.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="firstName"
      >
        First Name
      </label>
      <input
        class="rounded-md border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="text"
        name="firstName"
        v-model="formData.firstName"
      />
    </div>
    <div class="relative col-start-8 col-end-13 my-2 flex flex-col">
      <label
        class="dura absolute left-1 mb-2 px-2 transition-all duration-75"
        :class="
          formData.lastName.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="lastName"
      >
        Last Name
      </label>
      <input
        class="rounded-md border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="text"
        name="lastName"
        v-model="formData.lastName"
        :class="formData.lastName ? 'top-[-5px]' : 'top-3'"
      />
    </div>
    <div class="relative col-start-1 col-end-13 my-2 flex flex-col">
      <label
        class="absolute left-1 mb-2 px-2 transition-all duration-75"
        :class="
          formData.email.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="email"
      >
        Email
      </label>
      <input
        class="rounded-md border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="email"
        name="email"
        v-model="formData.email"
        :class="formData.email ? 'top-[-5px]' : 'top-3'"
      />
    </div>
    <div class="relative col-start-1 col-end-7 my-2 flex flex-col">
      <label
        class="absolute left-1 mb-2 px-2 transition-all duration-75"
        :class="
          formData.street.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="street"
      >
        street
      </label>
      <input
        class="rounded-md border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="text"
        name="street"
        v-model="formData.street"
        :class="formData.street ? 'top-[-5px]' : 'top-3'"
      />
    </div>
    <div class="relative col-start-8 col-end-13 my-2 flex flex-col">
      <label
        class="absolute left-1 mb-2 px-2 transition-all duration-75"
        :class="
          formData.houseNumber.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="houseNumber"
      >
        House number
      </label>
      <input
        class="rounded-md border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="text"
        name="houseNumber"
        v-model="formData.houseNumber"
        :class="formData.houseNumber ? 'top-[-5px]' : 'top-3'"
      />
    </div>

    <div class="relative col-start-1 col-end-7 my-2 flex flex-col">
      <label
        class="absolute left-1 mb-2 px-2 transition-all duration-75"
        :class="
          formData.city.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="city"
      >
        City
      </label>
      <input
        class="rounded-md border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="text"
        name="city"
        v-model="formData.city"
        :class="formData.city ? 'top-[-5px]' : 'top-3'"
      />
    </div>
    <div class="relative col-start-8 col-end-13 my-2 flex flex-col">
      <label
        class="absolute left-1 mb-2 px-2 transition-all duration-75"
        :class="
          formData.postalCode.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="postalCode"
      >
        Postal code
      </label>
      <input
        class="rounded-md border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="text"
        name="postalCode"
        v-model="formData.postalCode"
        :class="formData.postalCode ? 'top-[-5px]' : 'top-3'"
      />
    </div>
    <div class="relative col-start-1 col-end-13 my-2 flex flex-col">
      <label
        class="absolute left-1 mb-2 px-2 transition-all duration-75"
        :class="
          formData.phoneNumber.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-sm'
            : 'text-md left-1 top-2 z-[-1]'
        "
        for="phoneNumber"
      >
        Phone number
      </label>
      <input
        class="border-2 border-gray-200 bg-transparent p-2 focus:border-lightpurple"
        type="text"
        name="phoneNumber"
        v-model="formData.phoneNumber"
        :class="formData.phoneNumber ? 'top-[-5px]' : 'top-3'"
      />
    </div>
    <div class="col-start-1 col-end-13 mt-5 flex items-center justify-center">
      <button
        type="button"
        class="transition-scale group rounded-lg border-4 border-darkblue bg-lightblue bg-gradient-to-r px-7 py-3 text-xl text-white duration-300 ease-in-out hover:bg-darkblue"
        @click="submit"
      >
        Go to payments
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  street: '',
  houseNumber: '',
  city: '',
  postalCode: '',
  phoneNumber: '',
})

const submit = () => {
  alert(`sorry, we are not ready for orders`)
}
</script>

<style scoped></style>
