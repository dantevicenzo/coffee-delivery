import React, { ReactNode, useEffect, useReducer } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import { addProductAction, removeProductAction } from '../reducers/cart/actions'

// interface ICoffee {
//   id: string
//   imgSrc: string
//   tags: string[]
//   title: string
//   subtitle: string
//   price: string
// }

export interface IProduct {
  id: string
  quantity: number
}

interface ICartContext {
  orderList: IProduct[]
  addProduct: (id: string, quantity: number) => void
  removeProduct: (id: string) => void
}

export const CartContext = React.createContext({} as ICartContext)

interface ICartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: ICartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      orderList: [],
      deliveryAddress: {},
      paymentMethod: '',
    },
    (initialState) => {
      const storedStateAsString = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsString) {
        console.log(JSON.parse(storedStateAsString))
        return JSON.parse(storedStateAsString)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
  }, [cartState])

  const { orderList } = cartState

  function addProduct(id: string, quantity: number) {
    dispatch(addProductAction(id, quantity))
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id))
  }

  return (
    <CartContext.Provider value={{ orderList, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  )
}
