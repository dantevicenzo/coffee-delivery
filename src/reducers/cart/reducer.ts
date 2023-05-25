import { produce } from 'immer'
import { ActionType } from './actions'
import { IDeliveryAddress, IProduct } from '../../contexts/CartContextProvider'

interface ICartState {
  orderList: IProduct[]
  deliveryAddress: IDeliveryAddress
  paymentMethod: 'creditCard' | 'debitCard' | 'money'
}

export function cartReducer(state: ICartState, action: any) {
  switch (action.type) {
    case ActionType.ADD_PRODUCT: {
      return produce(state, (draft) => {
        console.log(state)
        console.log(action)
        const orderIndex = draft.orderList.findIndex(
          (order) => order.id === action.payload.data.id,
        )
        console.log(orderIndex)
        if (orderIndex > -1) {
          draft.orderList[orderIndex].quantity += action.payload.data.quantity
        } else {
          draft.orderList.push({
            id: action.payload.data.id,
            quantity: action.payload.data.quantity,
          })
        }
      })
    }
    case ActionType.REMOVE_PRODUCT: {
      return produce(state, (draft) => {
        console.log(state)
        console.log(action)
        const orderIndex = draft.orderList.findIndex(
          (order) => order.id === action.payload.data.id,
        )
        if (orderIndex > -1) {
          draft.orderList.splice(orderIndex, 1)
        }
      })
    }
    case ActionType.INCREMENT_PRODUCT: {
      return produce(state, (draft) => {
        console.log(state)
        console.log(action)

        const orderIndex = draft.orderList.findIndex(
          (order) => order.id === action.payload.data.id,
        )
        console.log(orderIndex)
        if (orderIndex > -1) {
          draft.orderList[orderIndex].quantity++
        }
      })
    }
    case ActionType.DECREMENT_PRODUCT: {
      return produce(state, (draft) => {
        console.log(state)
        console.log(action)

        const orderIndex = draft.orderList.findIndex(
          (order) => order.id === action.payload.data.id,
        )
        console.log(orderIndex)
        if (orderIndex > -1) {
          if (draft.orderList[orderIndex].quantity <= 1) {
            draft.orderList.splice(orderIndex, 1)
          } else {
            draft.orderList[orderIndex].quantity--
          }
        }
      })
    }
    case ActionType.UPDATE_QUANTITY: {
      return produce(state, (draft) => {
        console.log(state)
        console.log(action)

        const orderIndex = draft.orderList.findIndex(
          (order) => order.id === action.payload.data.id,
        )
        console.log(orderIndex)
        if (orderIndex > -1) {
          if (action.payload.data.quantity < 1) {
            draft.orderList.splice(orderIndex, 1)
          } else {
            draft.orderList[orderIndex].quantity = action.payload.data.quantity
          }
        }
      })
    }
    case ActionType.COMPLETE_ORDER: {
      return produce(state, (draft) => {
        draft.deliveryAddress.cep = action.payload.data.formData.cep
        draft.deliveryAddress.city = action.payload.data.formData.city
        draft.deliveryAddress.complement =
          action.payload.data.formData.complement
        draft.deliveryAddress.district = action.payload.data.formData.district
        draft.deliveryAddress.number = action.payload.data.formData.number
        draft.deliveryAddress.street = action.payload.data.formData.street
        draft.deliveryAddress.uf = action.payload.data.formData.uf

        draft.paymentMethod = action.payload.data.formData.paymentMethod

        draft.orderList = []
      })
    }
    default: {
      return state
    }
  }
}
