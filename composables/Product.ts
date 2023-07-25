import { ProductItem } from '@/types/components'

export const getProduct = async (
  id: string | string[],
): Promise<{ pending: Ref<boolean>; product: Ref<ProductItem | null> }> => {
  const { pending, data: product } = useFetch<ProductItem>(
    `https://fakestoreapi.com/products/${id}`,
    {
      lazy: true,
    },
  )

  return { pending, product }
}

export const getNumberOfProducts = async (
  numberofProds?: number | string,
): Promise<{ pending: Ref<boolean>; products: Ref<ProductItem[] | null> }> => {
  if (numberofProds) {
    const { pending, data: products } = await useFetch<ProductItem[]>(
      `https://fakestoreapi.com/products?limit=${numberofProds}`,
      {
        lazy: true,
      },
    )
    return { pending, products }
  } else {
    const { pending, data: products } = await useFetch<ProductItem[]>(
      `https://fakestoreapi.com/products`,
      {
        lazy: true,
      },
    )
    return { pending, products }
  }
}
