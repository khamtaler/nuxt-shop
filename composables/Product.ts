import { ProductItem } from '@/types/components'

export const useProduct = () => {
  const product = ref<ProductItem | null>(null)
  const products = ref<ProductItem[] | null>(null)
  const pending = ref<boolean>(false)
  const error = ref<any>(undefined)

  const fetchProduct = async (id: string | string[]) => {
    pending.value = true
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      product.value = data
    } catch (err: any) {
      error.value = err
    } finally {
      pending.value = false
    }
  }

  const fetchProducts = async (numberOfProds?: number | string) => {
    pending.value = true
    if (numberOfProds) {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products?limit=${numberOfProds}`,
        )
        const data = await res.json()
        products.value = data
      } catch (err: any) {
        error.value = err
      } finally {
        pending.value = false
      }
    } else {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        products.value = data
      } catch (err: any) {
        error.value = err
      } finally {
        pending.value = false
      }
    }
  }
  return { fetchProduct, fetchProducts, product, products, pending, error }
}
