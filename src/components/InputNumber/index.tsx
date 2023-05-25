import React, { ChangeEvent, useContext } from 'react'
import { StyledInputNumber, StepButton, Container } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'
import { CartContext } from '../../contexts/CartContextProvider'

interface IInputNumberProps {
  id: string
  value: number
  setValue: (value: React.SetStateAction<number>) => void
  changeOrderQuantity?: boolean
}

export function InputNumber({
  id,
  value,
  setValue,
  changeOrderQuantity = false,
}: IInputNumberProps) {
  const { incrementProduct, decrementProduct, updateQuantity } =
    useContext(CartContext)

  function handleInputStepUp() {
    setValue((state) => state + 1)

    if (changeOrderQuantity) {
      incrementProduct(id)
    }
  }
  function handleInputStepDown() {
    setValue((state) => state - 1)

    if (changeOrderQuantity) {
      decrementProduct(id)
    }
  }
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    const newQuantity = Number(e.target.value)
    setValue(newQuantity)
    if (changeOrderQuantity) {
      updateQuantity(id, newQuantity)
    }
  }

  return (
    <Container>
      <StepButton type="button" onClick={handleInputStepDown}>
        <Minus size={14} />
      </StepButton>
      <StyledInputNumber
        id={`input-${id}`}
        className="input-number"
        type="number"
        min={0}
        max={99}
        onChange={handleOnChange}
        value={value}
      />
      <StepButton type="button" onClick={handleInputStepUp}>
        <Plus size={14} />
      </StepButton>
    </Container>
  )
}
