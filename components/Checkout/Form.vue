<template>
  <div class="grid grid-cols-12 rounded-md border-2 border-lightpurple p-5">
    <div class="col-start-1 col-end-7 my-2 flex flex-col">
      <label class="mb-2" for="firstName">First Name</label>
      <input
        class="rounded-md border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="text"
        placeholder="First Name"
        name="firstName"
        v-model="formData.firstName"
      />
    </div>
    <div class="col-start-8 col-end-13 my-2 flex flex-col">
      <label class="mb-2" for="lastName">Last Name</label>
      <input
        class="rounded-md border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="text"
        placeholder="Last Name"
        name="lastName"
        v-model="formData.lastName"
      />
    </div>
    <div class="col-start-1 col-end-13 my-2 flex flex-col">
      <label class="mb-2" for="email">Email</label>
      <input
        class="rounded-md border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="email"
        placeholder="Email"
        name="email"
        v-model="formData.email"
      />
    </div>
    <div class="col-start-1 col-end-7 my-2 flex flex-col">
      <label class="mb-2" for="street">street</label>
      <input
        class="rounded-md border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="text"
        placeholder="Street"
        name="street"
        v-model="formData.street"
      />
    </div>
    <div class="col-start-8 col-end-13 my-2 flex flex-col">
      <label class="mb-2" for="houseNumber">House number</label>
      <input
        class="rounded-md border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="text"
        placeholder="house number"
        name="houseNumber"
        v-model="formData.houseNumber"
      />
    </div>

    <div class="col-start-1 col-end-7 my-2 flex flex-col">
      <label class="mb-2" for="city">City</label>
      <input
        class="rounded-md border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="text"
        placeholder="City"
        name="city"
        v-model="formData.city"
      />
    </div>
    <div class="col-start-8 col-end-13 my-2 flex flex-col">
      <label class="mb-2" for="postalCode">Postal code</label>
      <input
        class="rounded-md border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="text"
        placeholder="Postal code"
        name="postalCode"
        v-model="formData.postalCode"
      />
    </div>
    <div class="col-start-1 col-end-13 my-2 flex flex-col">
      <label class="mb-2" for="phoneNumber">Phone number</label>
      <input
        class="border-2 border-gray-200 p-2 focus:border-lightpurple"
        type="text"
        placeholder="Phone number"
        name="phoneNumber"
        v-model="formData.phoneNumber"
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
