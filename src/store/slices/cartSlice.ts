import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { CartItemType, CartState } from 'store/types/cartTypes'

const initialState: CartState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      const existingId = state.cart.findIndex(
        (product) => product.id === action.payload.id
      )
      console.log(action.payload.id, existingId)
      if (existingId >= 0) {
        state.cart[existingId].cartCount++
      } else {
        state.cart.push({
          ...action.payload,
          cartCount: action.payload.cartCount
        })
      }
      return state
    },
    subtractFromCart: (state, action: PayloadAction<CartItemType>) => {
      const existingId = state.cart.findIndex(
        (product) => product.id === action.payload.id
      )
      if (existingId >= 0) {
        // don't delete last item
        if (state.cart[existingId].cartCount === 1) {
          return
        }
        state.cart[existingId].cartCount--
      }
      return state
    },
    removeFromCart: (state, action: PayloadAction<CartItemType>) => {
      const existingId = state.cart.findIndex(
        (product) => product.id === action.payload.id
      )
      if (existingId >= 0) state.cart.splice(existingId, 1)
      return state
    },
    clearCart: (state) => {
      return initialState
    }
  }
})

export const { addToCart, subtractFromCart, removeFromCart, clearCart } =
  cartSlice.actions

export const selectCartData = (state: RootState) => state.cart.cart

export default cartSlice.reducer
