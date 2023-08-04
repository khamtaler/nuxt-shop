import { setActivePinia, createPinia } from 'pinia'
import { useLoginStore } from './login'

if (import.meta.vitest) {
  const { describe, expect, it, beforeEach } = import.meta.vitest
  describe('login Store', () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it('gets initial login modal value', () => {
      const loginStore = useLoginStore()
      expect(loginStore.getOpen).toBe(false)
    })

    it('toggleOpen changes boolean value of isLoginModalOpen', () => {
      const loginStore = useLoginStore()
      expect(loginStore.getOpen).toBe(false)
      loginStore.toggleOpen()
      expect(loginStore.getOpen).toBe(true)
    })
    it('isLoginModalOpen changes from register to login and back', () => {
      const loginStore = useLoginStore()
      expect(loginStore.openRegister).toBe(true)
      expect(loginStore.openLogin).toBe(false)
      loginStore.toggleLoginRegister()
      expect(loginStore.openLogin).toBe(true)
      expect(loginStore.openRegister).toBe(false)
      loginStore.toggleLoginRegister()
      expect(loginStore.openLogin).toBe(false)
      expect(loginStore.openRegister).toBe(true)
    })
  })
}
