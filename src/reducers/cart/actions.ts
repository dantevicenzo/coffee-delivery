import { TCheckoutFormData } from '../../pages/Checkout'

/* eslint-disable no-unused-vars */
export enum ActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
  COMPLETE_ORDER = 'COMPLETE_ORDER',
}

export function addProductAction(id: string, quantity: number) {
  return {
    type: ActionType.ADD_PRODUCT,
    payload: {
      data: { id, quantity },
    },
  }
}

export function removeProductAction(id: string) {
  return {
    type: ActionType.REMOVE_PRODUCT,
    payload: {
      data: { id },
    },
  }
}

export function incrementProductAction(id: string) {
  return {
    type: ActionType.INCREMENT_PRODUCT,
    payload: {
      data: { id },
    },
  }
}

export function decrementProductAction(id: string) {
  return {
    type: ActionType.DECREMENT_PRODUCT,
    payload: {
      data: { id },
    },
  }
}

export function updateQuantityAction(id: string, quantity: number) {
  return {
    type: ActionType.UPDATE_QUANTITY,
    payload: {
      data: { id, quantity },
    },
  }
}

export function completeOrderAction(formData: TCheckoutFormData) {
  return {
    type: ActionType.COMPLETE_ORDER,
    payload: {
      data: { formData },
    },
  }
}
