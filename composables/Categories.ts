export const useCategory = () => {
  const category = ref<string[] | null>()
  const ready = ref<boolean>()

  const getCategories = async (amount: number): Promise<void> => {
    const { data, pending } = await useFetch<string[]>(
      'https://fakestoreapi.com/products/categories',
      {
        server: true,
        lazy: true,
        transform: (data) => {
          return data.slice(0, amount)
        },
      },
    )
    category.value = data.value as string[]
    ready.value = pending.value as boolean
  }

  return { category, getCategories, ready }
}
