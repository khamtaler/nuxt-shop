import { defineStore } from 'pinia'
import { ProductItem } from 'types/components'

export const useCartStore = defineStore('cart', {
  state: () => {
    return { openModal: false, items: [] as ProductItem[] }
  },
  getters: {
    getModal: (state) => state.openModal,
    getItems: (state) => state.items,
  },

  actions: {
    toggleModal(): void {
      this.openModal = !this.openModal
      console.log(this.openModal)
    },
    addToCart(item: ProductItem): void {
      if (!this.items.find((i) => i.id === item.id)) {
        item.count = 1
        this.items.unshift(item)
      } else {
        this.items.map((i) => {
          if (i.id === item.id && i !== undefined && i.count !== undefined) {
            i.count++
          }
        })
      }
    },
    deleteFromCart(id: number | string): void {
      console.log('del', id)
      if (this.items.length) {
        console.log('length', id)
        this.items = this.items.filter((i) => {
          return i.id !== id
        })
      }
    },
    increaseCount(id: number | string): void {
      if (!this.items.length) {
        return
      }
      this.items.map((i) => {
        if (i.id == id && i !== undefined && i.count !== undefined) {
          i.count++
        }
      })
    },
    decreaseCount(id: number | string): void {
      if (!this.items.length) {
        return
      }
      this.items.map((i) => {
        if (
          i.id == id &&
          i !== undefined &&
          i.count !== undefined &&
          i.count > 0
        ) {
          i.count--
        }
      })
    },
  },
})
