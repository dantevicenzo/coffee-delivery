/* eslint-disable no-unused-vars */
export enum ActionType {
  ADD_PRODUCT = 'ADD_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
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
