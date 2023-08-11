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
export interface NavigationButton {
  text: string
  link?: string
}
export interface Header {
  header: string
  text: string
}

export interface CartButton {
  product: CartProductItem
  text: string
}

export interface AccordionTab {
  title: string
  ariaTitle: string
  tabText: string
}
export interface Rating {
  rating:
    | {
        rate: number
        count: number
      }
    | undefined
}

export interface Slider {
  slides?: number
  slidesPerView?: number
}
