import React, { ReactNode, useEffect, useReducer } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addProductAction,
  completeOrderAction,
  decrementProductAction,
  incrementProductAction,
  removeProductAction,
  updateQuantityAction,
} from '../reducers/cart/actions'
import { defaultCoffeeList } from '../pages/Home/components/CoffeeList/defaultCoffeeList'
import { ICoffeeCardProps } from '../pages/Home/components/CoffeeCard'
import { TCheckoutFormData } from '../pages/Checkout'

export interface IProduct {
  id: string
  quantity: number
}

export interface IDeliveryAddress {
  cep: string
  street: string
  number: string
  complement?: string
  district: string
  city: string
  uf: string
}

interface ICartContext {
  orderList: IProduct[]
  paymentMethod?: string
  deliveryAddress?: IDeliveryAddress
  addProduct: (id: string, quantity: number) => void
  removeProduct: (id: string) => void
  incrementProduct: (id: string) => void
  decrementProduct: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  completeOrder: (formData: TCheckoutFormData) => void
  getCoffeeDataById: (id: string) => ICoffeeCardProps
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

  const { orderList, deliveryAddress, paymentMethod } = cartState

  function addProduct(id: string, quantity: number) {
    dispatch(addProductAction(id, quantity))
  }

  function removeProduct(id: string) {
    dispatch(removeProductAction(id))
  }

  function incrementProduct(id: string) {
    dispatch(incrementProductAction(id))
  }

  function decrementProduct(id: string) {
    dispatch(decrementProductAction(id))
  }

  function updateQuantity(id: string, quantity: number) {
    dispatch(updateQuantityAction(id, quantity))
  }

  function completeOrder(formData: TCheckoutFormData) {
    dispatch(completeOrderAction(formData))
  }

  function getCoffeeDataById(id: string) {
    return defaultCoffeeList[
      defaultCoffeeList.findIndex((coffee) => coffee.id === id)
    ]
  }

  return (
    <CartContext.Provider
      value={{
        orderList,
        paymentMethod,
        deliveryAddress,
        addProduct,
        removeProduct,
        incrementProduct,
        decrementProduct,
        updateQuantity,
        completeOrder,
        getCoffeeDataById,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
