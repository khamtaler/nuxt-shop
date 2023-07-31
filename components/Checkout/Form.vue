<template>
  <div
    class="checkout grid grid-cols-12 gap-2 rounded-md border-2 border-lightpurple p-5"
  >
    <div class="col-start-1 col-end-13">
      <h3 class="text-center text-red-600">
        Unfortunatelly I will not validate your data this time, come back soon
        to get your data validated before stepping forward &#128519;
      </h3>
    </div>
    <div class="relative col-start-1 col-end-7 my-1 flex flex-col">
      <label
        class="absolute px-2 transition-all duration-75"
        :class="
          formData.firstName.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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
    <div class="relative col-start-7 col-end-13 my-1 flex flex-col">
      <label
        class="dura absolute left-1 px-2 transition-all duration-75"
        :class="
          formData.lastName.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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
    <div class="relative col-start-1 col-end-13 my-1 flex flex-col">
      <label
        class="absolute left-1 px-2 transition-all duration-75"
        :class="
          formData.email.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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
    <div class="relative col-start-1 col-end-7 my-1 flex flex-col">
      <label
        class="absolute left-1 px-2 transition-all duration-75"
        :class="
          formData.street.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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
    <div class="relative col-start-7 col-end-13 my-1 flex flex-col">
      <label
        class="absolute left-1 px-2 transition-all duration-75"
        :class="
          formData.houseNumber.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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

    <div class="relative col-start-1 col-end-7 my-1 flex flex-col">
      <label
        class="absolute left-1 px-2 transition-all duration-75"
        :class="
          formData.city.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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
    <div class="relative col-start-7 col-end-13 my-1 flex flex-col">
      <label
        class="absolute left-1 px-2 transition-all duration-75"
        :class="
          formData.postalCode.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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
    <div class="relative col-start-1 col-end-13 my-1 flex flex-col">
      <label
        class="absolute left-1 px-2 transition-all duration-75"
        :class="
          formData.phoneNumber.length > 0
            ? 'left-3  top-[-12px] z-10 rounded-md bg-white text-xs md:text-sm'
            : 'left-1 top-2 z-[-1] text-sm md:text-base'
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
        class="transition-scale group w-[200px] rounded-lg border-4 border-darkblue bg-lightblue bg-gradient-to-r px-5 py-2 text-xl text-white duration-300 ease-in-out hover:bg-darkblue"
        @click="submit"
        @mouseenter="hover = !hover"
        @mouseleave="hover = !hover"
      >
        {{ hover ? 'Lets pay!' : 'Ready?' }}
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

const hover = ref(false)
const submit = () => {
  alert(`sorry, we are not ready for orders`)
}
</script>

<style scoped></style>
