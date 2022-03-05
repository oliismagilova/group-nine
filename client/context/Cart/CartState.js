import React, { useReducer, useContext, useEffect, useState } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from './Types'
import { useUserAuth } from '@/context/UserAuthContext'


export function CartState({ children }) {
  const initalState = {
    showCart: false,
    cartItems: []
  }

  const { user } = useUserAuth();

  const [storage, setStorage] = useState([])

  const [state, dispatch] = useReducer(CartReducer, initalState)

  const addToCart = (item) => { dispatch({ type: ADD_TO_CART, payload: item }) }
  const showHideCart = () => { dispatch({ type: SHOW_HIDE_CART }) }
  const removeItem = (id) => { dispatch({ type: REMOVE_ITEM, payload: id }) }

  useEffect(() => {
    const cache = localStorage.getItem('Cart')

    if (cache) {
      initalState.cartItems = [...cache]
    }
  }, [])

  return (
    <CartContext.Provider value={
      {
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem
      }
    }>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}