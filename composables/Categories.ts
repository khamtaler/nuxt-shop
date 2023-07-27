import { ProductItem } from 'types/components'
export const useCategory = () => {
  const categories = ref<string[] | null>()
  const products = ref<ProductItem[] | null>()
  const wait = ref<boolean>()

  const getCategories = async (amount: number) => {
    const { data, pending } = await useFetch<string[]>(
      'https://fakestoreapi.com/products/categories',
      {
        server: true,
        transform: (data) => {
          return data.slice(0, amount)
        },
      },
    )
    console.log(data.value, pending.value)
    categories.value = data.value as string[]
    wait.value = pending.value as boolean
  }

  const fetchProductsByCategory = async (category: string) => {
    const { data, pending } = await useFetch<ProductItem[]>(
      `https://fakestoreapi.com/products/category/${category}`,
      {
        server: true,
      },
    )
    console.log(data.value, pending.value)
    products.value = data.value as ProductItem[]
    wait.value = pending.value as boolean
  }

  return { categories, getCategories, wait, fetchProductsByCategory, products }
}
