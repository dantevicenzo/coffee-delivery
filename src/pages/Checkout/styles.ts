import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  width: 70rem;
  margin: 2.5rem auto;
  gap: 2rem;
`
interface IFormTitleContainerProps {
  color: 'yellowDark' | 'purple'
}

export const FormTitleContainer = styled.div<IFormTitleContainerProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.color[props.color]};
  }
`
export const TitleExtraSmall = styled.h5`
  font-size: ${(props) => props.theme.typography.baloo2.sizes.titleXs.fontSize};
  color: ${(props) => props.theme.color.baseSubtitle};
  margin-bottom: 0.938rem;
`
export const TextMedium = styled.p`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
  line-height: ${(props) =>
    props.theme.typography.roboto.sizes.textM.lineHeight};
  color: ${(props) => props.theme.color.baseSubtitle};
`

export const TextSmall = styled.p`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textS.fontSize};
  line-height: ${(props) =>
    props.theme.typography.roboto.sizes.textS.lineHeight};
  color: ${(props) => props.theme.color.baseText};
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const FormRow = styled.div``
export const FormCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.color.baseCard};
  border-radius: ${(props) => props.theme.borderRadius};
`
export const OrderConfirmationCard = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.color.baseCard};

  border-top-right-radius: 44px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InputRow = styled.div`
  display: flex;
  gap: 0.75rem;
`
const BaseInput = styled.input`
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.baseInput};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.color.baseButton};
`

export const Input = styled(BaseInput)`
  display: inline;
  flex: 1;
`

export const InputS = styled(BaseInput)`
  display: inline;
  width: 3.75rem;
`

export const InputM = styled(BaseInput)`
  display: inline;
  width: 12.5rem;
`

export const InputL = styled(BaseInput)`
  width: 35rem;
`

export const PaymentMethodList = styled.ul`
  list-style: none;

  display: flex;
  gap: 0.75rem;

  li {
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem 0;
      gap: 0.75rem;
      flex: 1;

      border: none;
      border-radius: ${(props) => props.theme.borderRadius};

      color: ${(props) => props.theme.color.baseText};
      background-color: ${(props) => props.theme.color.baseButton};
      text-transform: uppercase;

      font-family: ${(props) => props.theme.typography.roboto.fontFamily};
      font-size: ${(props) =>
        props.theme.typography.roboto.sizes.buttonM.fontSize};
      line-height: 0;

      svg {
        color: ${(props) => props.theme.color.purple};
      }

      &:focus {
        outline: none;
        box-shadow: none;
      }

      &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.color.baseHover};
        color: ${(props) => props.theme.color.baseSubtitle};
      }

      &.selected {
        background-color: ${(props) => props.theme.color.purpleLight};
        border: 1px solid ${(props) => props.theme.color.purple};
      }
    }
  }
`

export const OrderPriceRow = styled.div`
  display: flex;
  justify-content: space-between;
`
export const OrderPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`
export const OrderPriceTitle = styled.span`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textS.fontSize};
  color: ${(props) => props.theme.color.baseText};
`
export const OrderPriceValue = styled.span`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
  color: ${(props) => props.theme.color.baseText};
`
export const ConfirmOrderButton = styled.button`
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.color.yellow};
  color: ${(props) => props.theme.color.white};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.typography.roboto.sizes.buttonG.fontSize};
  padding: 0.75rem 0;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.yellowDark};
  }
`
