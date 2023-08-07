import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from './cart'
import { roundNumber } from '../utils/numbers'

const testProduct = {
  category: "men's clothing",
  count: 0,
  description: 'Your perfect pack for everyday use and walks in the forest. ',
  id: 1,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  price: 109.95,
  rating: { rate: 3.9, count: 120 },
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
}
const testProduct2 = {
  category: "men'",
  count: 0,
  description: 'Your perfect pase and walks in the forest. ',
  id: 2,
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  price: 129.95,
  rating: { rate: 3.4, count: 20 },
  title: 'Fjallraven - Foldsackits 15 Laptops',
}

if (import.meta.vitest) {
  const { describe, expect, it, beforeEach } = import.meta.vitest
  describe('cart store', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('check if cart modal is initially hide and switches to open', () => {
      const cartStore = useCartStore()
      expect(cartStore.getModal).toBe(false)
    })
    it('check if cart modal switches to open', () => {
      const cartStore = useCartStore()
      cartStore.toggleModal()
      expect(cartStore.getModal).toBe(true)
    })
  })

  describe('cart functionalities', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })
    it('check if correct product is added to cart with correct amount and price', () => {
      const cartStore = useCartStore()
      cartStore.addToCart(testProduct)
      expect(cartStore.items[0]).toStrictEqual(testProduct)
      expect(cartStore.getProductsNumber).toBe(1)
      expect(cartStore.gettotal).toBe(testProduct.price)
    })
    it('check if double add of product increases amount of products in cart', () => {
      const cartStore = useCartStore()
      cartStore.addToCart(testProduct)
      cartStore.addToCart(testProduct)
      expect(cartStore.getProductsNumber).toBe(2)
      expect(cartStore.gettotal).toBe(roundNumber(testProduct.price * 2))
    })
    it('check if adding 2 products make a reversed array of products', () => {
      const cartStore = useCartStore()
      cartStore.addToCart(testProduct)
      cartStore.addToCart(testProduct2)
      expect(cartStore.getProductsNumber).toBe(2)
      expect(cartStore.items).toStrictEqual([testProduct2, testProduct])
    })
    it('check deleting from cart removes product', () => {
      const cartStore = useCartStore()
      cartStore.addToCart(testProduct)
      expect(cartStore.getProductsNumber).toBe(1)
      expect(cartStore.items[0]).toStrictEqual(testProduct)
      cartStore.deleteFromCart(testProduct.id)
      expect(cartStore.getProductsNumber).toBe(0)
    })
    it('check if increase of the count increases the count', () => {
      const cartStore = useCartStore()
      cartStore.addToCart(testProduct)
      expect(cartStore.items[0].count).toBe(1)
      expect(cartStore.getProductsNumber).toBe(1)
      cartStore.increaseCount(testProduct.id)
      expect(cartStore.items[0].count).toBe(2)
      expect(cartStore.getProductsNumber).toBe(2)
    })
    it('check if decrease of the count decreases the count', () => {
      const cartStore = useCartStore()
      cartStore.addToCart(testProduct)
      cartStore.increaseCount(testProduct.id)
      expect(cartStore.items[0].count).toBe(2)
      expect(cartStore.getProductsNumber).toBe(2)
      cartStore.decreaseCount(testProduct.id)
      expect(cartStore.items[0].count).toBe(1)
      expect(cartStore.getProductsNumber).toBe(1)
    })
    it('deletes from cart if product number decreased to 0', () => {
      const cartStore = useCartStore()
      cartStore.addToCart(testProduct)
      expect(cartStore.items[0]).toStrictEqual(testProduct)
      cartStore.decreaseCount(testProduct.id)
      expect(cartStore.items).toStrictEqual([])
    })
    it('returns error if wrong operation', () => {
      const cartStore = useCartStore()
      expect(() => cartStore.increaseCount(5)).toThrowError('exist')
      expect(() => cartStore.decreaseCount(5)).toThrowError('exist')
      expect(() => cartStore.deleteFromCart(5)).toThrowError('exist')
    })
  })
}
