import { defineStore } from 'pinia'

export const useCounterStore = defineStore('login', {
  state: () => {
    return { open: true }
  },
  getters: {
    getLogin: (state) => state.open,
  },

  actions: {
    toggle() {
      this.open = !this.open
    },
  },
})
