import { defineStore } from 'pinia'

export const usemobileMenuStore = defineStore('mobileMenu', {
  state: () => {
    return { openMenu: false }
  },
  getters: {
    getOpen: (state) => state.openMenu,
  },

  actions: {
    toggleOpen() {
      this.openMenu = !this.openMenu
    },
  },
})
