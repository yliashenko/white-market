export interface ICartProduct {
  productId: number,
  quantity: number
}

export interface IAddToCart {
  userId: number,
  date: string,
  products: ICartProduct[]
}

export interface IUpdateProductInCart {
  userId: number,
  date: string,
  products: ICartProduct[]
}

export interface ICart {
  id: number,
  userId: number,
  date: string,
  products: ICartProduct[]
}

export interface ICartWithTotals {
  id: number,
  userId: number,
  date: string,
  products: ICartProduct[]
  totalPrice: number
}
