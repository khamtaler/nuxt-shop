import { defineStore } from 'pinia'
import { CartProductItem } from 'types/components'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      items: [] as CartProductItem[],
      total: 0,
      productsNumber: 0,
    }
  },
  getters: {
    getItems: (state) => state.items,
    getTotal: (state) => state.total,
    getProductsNumber: (state) => state.productsNumber,
  },

  actions: {
    addToCart(item: CartProductItem): void {
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

      this.countCart()
    },
    deleteFromCart(id: number | string): void {
      if (!this.items.length) {
        throw new Error('this product doesnt exist')
      }
      this.items = this.items.filter((i) => {
        return i.id !== id
      })
      this.countCart()
    },
    increaseCount(id: number | string): void {
      if (!this.items.length) {
        throw new Error('this product doesnt exist')
      }
      this.items.map((i) => {
        if (i.id == id && i !== undefined && i.count !== undefined) {
          i.count++
        }
      })

      this.countCart()
    },
    decreaseCount(id: number | string): void {
      if (!this.items.length) {
        throw new Error('this product doesnt exist')
      }
      this.items.map((i) => {
        if (
          i.id == id &&
          i !== undefined &&
          i.count !== undefined &&
          i.count > 0
        ) {
          i.count--
          if (i.count === 0) {
            this.deleteFromCart(id)
          }
        }
      })

      this.countCart()
    },
    countCart(): void {
      let count = 0
      let itemsCount = 0
      if (!this.items.length) {
        this.total = 0
        this.productsNumber = 0
      }
      for (let i = 0; i < this.items.length; i++) {
        count += this.items[i].price * this.items[i].count
        itemsCount += this.items[i].count
      }
      this.total = count
      this.productsNumber = itemsCount
    },
  },
})
