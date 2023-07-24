import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return { openModal: false }
  },
  getters: {
    getModal: (state) => state.openModal,
  },

  actions: {
    toggleModal() {
      this.openModal = !this.openModal
      console.log(this.openModal)
    },
  },
})
