export type CartItemType = {
  id: string
  productName: string
  unitPrice: number
  taxRate: number
  cartCount: number
}

export type CartState = {
  cart: CartItemType[]
}
