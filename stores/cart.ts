import { defineStore } from 'pinia'
import { CartProductItem } from 'types/components'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      openModal: false,
      items: [] as CartProductItem[],
      total: ref(0),
    }
  },
  getters: {
    getModal: (state) => state.openModal,
    getItems: (state) => state.items,
    gettotal: (state) => state.total,
  },

  actions: {
    toggleModal(): void {
      this.openModal = !this.openModal
    },
    addToCart(item: CartProductItem): void {
      console.log('added')
      console.log(this.items)
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
      this.countTotal()
    },
    deleteFromCart(id: number | string): void {
      if (this.items.length) {
        this.items = this.items.filter((i) => {
          return i.id !== id
        })
      }
      this.countTotal()
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
      this.countTotal()
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
      this.countTotal()
    },
    countTotal(): void {
      const count = ref(0)
      if (!this.items.length) {
        count.value = 0
      }
      for (let i = 0; i < this.items.length; i++) {
        count.value += this.items[i].price * this.items[i].count
      }
      this.total = count.value
    },
  },
})
