import React, { useReducer, useContext, useEffect, useState } from 'react'
import CartContext from './CartContext'
import CartReducer from './CartReducer'

import { useUserAuth } from '../UserAuthContext'
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from './Types'

export function CartState({ children }) {
  const initialState = {
    showCart: false,
    cartItems: [],
  }

  const [state, dispatch] = useReducer(CartReducer, initialState)

  // local storage is working have to set field to set user and check for user
  useEffect(() => {
    const data = localStorage.getItem('User-Cart')

    if (data) {
      initialState.cartItems = JSON.parse(data)
    }
  }, [])

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item })
  }
  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART })
  }
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id })
  }

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return useContext(CartContext)
}
