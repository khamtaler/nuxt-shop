import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return { openModal: false, openRegister: true, openLogin: false }
  },
  getters: {
    getOpen: (state) => state.openModal,
    getLogin: (state) => state.openRegister,
    getRegister: (state) => state.openLogin,
  },

  actions: {
    toggleOpen() {
      this.openModal = !this.openModal
    },
    toggleLoginRegister() {
      this.openRegister = !this.openRegister
      this.openLogin = !this.openLogin
    },
  },
})
