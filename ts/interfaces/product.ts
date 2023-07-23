export interface ProductItem {
  id: number
  category: string
  image: string
  imageUrl1?: string
  description: string
  title: string
  price: number
  rating: {
    count: number
    rate: number
  }
  promotionPrice?: number
}
export type ProductItems = Array<ProductItem>
