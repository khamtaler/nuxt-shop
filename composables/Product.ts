import { ProductItem } from '@/types/components'

export const useProduct = () => {
  const product = ref<ProductItem | null>(null)
  const products = ref<ProductItem[] | null>(null)
  const ready = ref<boolean>(false)
  const error = ref<any>(undefined)

  const fetchProduct = async (id: string | string[]) => {
    ready.value = false
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      product.value = data
    } catch (err: any) {
      error.value = err
    } finally {
      ready.value = true
    }
  }

  const fetchProducts = async (numberOfProds?: number | string) => {
    ready.value = false
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
        ready.value = true
      }
    } else {
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        products.value = data
      } catch (err: any) {
        error.value = err
      } finally {
        ready.value = true
      }
    }
  }
  return { fetchProduct, fetchProducts, product, products, ready, error }
}
