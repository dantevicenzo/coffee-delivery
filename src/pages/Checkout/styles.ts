import styled, { css } from 'styled-components'

export const Form = styled.form`
  display: flex;
  width: 72rem;
  padding: 0 1rem;
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
  width: 40rem;
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
export const ExtendedOptionalPlaceholder = styled.span`
  display: flex;
  flex: 1;
  position: relative;

  &:before,
  &::placeholder {
    font-family: ${(props) => props.theme.typography.roboto.fontFamily};
    text-align: right;
    font-style: italic;
    font-size: 0.75rem;
    padding: 1rem 0.125rem;
    line-height: 1.3;
  }

  &::placeholder {
    color: transparent;
    background: transparent;
  }

  &:has(input:optional:placeholder-shown) {
    &:before {
      content: 'Opcional';
      position: absolute;
      inset: 0;
      z-index: 1;
      color: ${(props) => props.theme.color.baseText};
      background: transparent;
      width: calc(100% - 10px);
      white-space: nowrap;
      overflow: hidden;
      pointer-events: none;
    }
  }
`

interface IInputTextProps {
  variantSize: 'S' | 'M' | 'L' | 'FLEX'
}

export const InputText = styled.input<IInputTextProps>`
  border-radius: 4px;
  background-color: ${(props) => props.theme.color.baseInput};
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.color.baseButton};

  ${({ variantSize }) =>
    variantSize === 'FLEX' &&
    css`
      display: inline;
      flex: 1;
    `}
  ${({ variantSize }) =>
    variantSize === 'S' &&
    css`
      display: inline;
      width: 3.75rem;
    `}
  ${({ variantSize }) =>
    variantSize === 'M' &&
    css`
      display: inline;
      width: 12.5rem;
    `}
  ${({ variantSize }) =>
    variantSize === 'L' &&
    css`
      width: 35rem;
    `}
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

  &:hover:enabled {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.yellowDark};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.color.baseHover};
  }
`
