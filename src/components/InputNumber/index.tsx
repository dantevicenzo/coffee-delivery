import { StyledInputNumber, StepButton, Container } from './styles'
import { Minus, Plus } from '@phosphor-icons/react'

interface IInputNumberProps {
  id: string
}

export function InputNumber({ id }: IInputNumberProps) {
  function handleInputStepUp() {
    getInputNumber()?.stepUp()
  }
  function handleInputStepDown() {
    getInputNumber()?.stepDown()
  }

  function getInputNumber() {
    return document.getElementById(id) as HTMLInputElement | null
  }

  return (
    <Container>
      <StepButton onClick={handleInputStepDown}>
        <Minus size={14} />
      </StepButton>
      <StyledInputNumber
        id={id}
        className="input-number"
        type="number"
        defaultValue={0}
        min={0}
        max={99}
      />
      <StepButton onClick={handleInputStepUp}>
        <Plus size={14} />
      </StepButton>
    </Container>
  )
}
