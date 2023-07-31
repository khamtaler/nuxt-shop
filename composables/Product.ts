import { CartProductItem, ProductItem } from '@/types/components'

export const useProduct = () => {
  const product = ref<CartProductItem | null>(null)
  const products = ref<ProductItem[] | null>(null)
  const wait = ref<boolean>(false)
  const error = ref<any>(undefined)

  const fetchProduct = async (id: string | string[]) => {
    const { data, pending } = await useFetch<ProductItem>(
      `https://fakestoreapi.com/products/${id}`,
      {
        server: true,
        transform(data): CartProductItem {
          return { ...data, count: 0 }
        },
      },
    )
    product.value = data.value as CartProductItem
    wait.value = pending.value as boolean

    // wait.value = true
    // try {
    //   const res = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    //     res => res.map(product => product)
    //   )
    //   const data = await res.json()
    //   product.value = data
    // } catch (err: any) {
    //   error.value = err
    // } finally {
    //   wait.value = false
    // }
  }

  const fetchProducts = async (numberOfProds?: number | string) => {
    const { data, pending } = await useFetch<ProductItem[]>(
      `https://fakestoreapi.com/products`,
      { query: { limit: numberOfProds }, server: true },
    )
    products.value = data.value as ProductItem[]
    wait.value = pending.value as boolean
  }

  return { fetchProduct, fetchProducts, product, products, wait, error }
}
