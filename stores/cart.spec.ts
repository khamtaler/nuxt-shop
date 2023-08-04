import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from './cart'

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
    const testProduct = {
      category: "men's clothing",
      count: 0,
      description:
        'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
      id: 1,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      price: 109.95,
      rating: { rate: 3.9, count: 120 },
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    }
  })
}
