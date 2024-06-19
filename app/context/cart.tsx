"use client"
import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react'

const CartContext = createContext({})

export const useCartContext = () => {
    return useContext(CartContext)
}

const reducer = (state: any, action: any) => {

    switch (action.type) {
        case "Fill":

            return {
                cart:action.payload.cart,
                total:action.payload.total
            }


        case "Add":
            const newCart = [...state.cart, action.payload];
            const newTotal = state.total + (Number(action.payload.quantity) * Number(action.payload.price))

            return {
                ...state,
                cart: newCart,
                total: newTotal
            }
            
        case "Increment":
            const {quantity, price}:any = action.payload
            const newItem = {
                ...state.cart[0],
                quantity
            }
            const newTotalInc = quantity * price
            return {
                ...state,
                cart:[newItem],
                total:newTotalInc
            }
            
    }
}

const initialState = {
    cart: [],
    total: 0
}

const CartProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state,'STATEEEE')
    useEffect(()=>{
        if(state?.cart?.length){
            localStorage.setItem('cart',JSON.stringify(state))
        }
    },[state?.cart])

    useEffect(()=>{
      let cartLocal:any = localStorage.getItem('cart');

      if(cartLocal){
        cartLocal = JSON.parse(cartLocal);
        dispatch({
            type:"Fill",
            payload:cartLocal
        })
      }
    },[])

    const addToCart = useCallback((item: any) => {
        if (state?.cart?.length !== 0) {
            dispatch({
                type: 'Increment',
                payload:item
            })
        } else {
            dispatch({
                type: 'Add',
                payload: item
            })
        }
    }, [state.cart])

    return (
        <CartContext.Provider value={{ state, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider