export interface ProductItem {
  sku: string
  imageUrl: string
  imageUrl1?: string
  text: string
  desc: string
  price: number
  currency: string
  promotionPrice: number
}
export interface ProductItems extends Array<ProductItem> {}
