export interface ProductItem {
  id: number
  category: string
  image: string
  imageUrl1?: string
  description: string
  title: string
  price: number
  rating: {
    rate: number
    count: number
  }
  promotionPrice?: number
}
export interface CartProductItem extends ProductItem {
  count: number
}
export interface Link {
  text: string
  link: string
}

export interface Image {
  image: string
  name: string
}

export interface Header {
  header: string
  text: string
}

export interface CartButton {
  product: ProductItem
  text: string
}
