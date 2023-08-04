import { setActivePinia, createPinia } from 'pinia'
import { useMobileMenuStore } from './mobileMenu'

if (import.meta.vitest) {
  const { describe, expect, it, beforeEach } = import.meta.vitest
  describe('Counter Store', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('gets open value', () => {
      const mobileMenuStore = useMobileMenuStore()
      expect(mobileMenuStore.getOpen).toBe(false)
      mobileMenuStore.isMobileMenuOpen = true
      expect(mobileMenuStore.getOpen).toBe(true)
    })

    it('toggleOpen changes boolean value of isOpen', () => {
      const mobileMenuStore = useMobileMenuStore()
      expect(mobileMenuStore.getOpen).toBe(false)
      mobileMenuStore.toggleOpen()
      expect(mobileMenuStore.getOpen).toBe(true)
    })
  })
}
