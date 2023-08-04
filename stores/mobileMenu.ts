import { defineStore } from 'pinia'

export const useMobileMenuStore = defineStore('mobileMenu', {
  state: () => {
    return { isMobileMenuOpen: false }
  },
  getters: {
    getOpen: (state) => state.isMobileMenuOpen,
  },

  actions: {
    toggleOpen() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
  },
})
