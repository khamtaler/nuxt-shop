import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return { open: false }
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
