import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
  state: () => {
    return { isLoginModalOpen: false, openRegister: true, openLogin: false }
  },
  getters: {
    getOpen: (state) => state.isLoginModalOpen,
    getLogin: (state) => state.openRegister,
    getRegister: (state) => state.openLogin,
  },

  actions: {
    toggleOpen() {
      this.isLoginModalOpen = !this.isLoginModalOpen
    },
    toggleLoginRegister() {
      this.openRegister = !this.openRegister
      this.openLogin = !this.openLogin
    },
  },
})
