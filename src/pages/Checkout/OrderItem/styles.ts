import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
`

export const InfoContainer = styled.div`
  display: flex;
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const CoffeeImg = styled.img`
  width: 4rem;
  height: 4rem;
  margin-right: 1.25rem;
`
export const CoffeeTitle = styled.p`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
  color: ${(props) => props.theme.color.baseSubtitle};
  margin-bottom: 0.5rem;
`
export const PriceText = styled.strong`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
  color: ${(props) => props.theme.color.baseText};
`
export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  font-size: ${(props) => props.theme.typography.roboto.sizes.buttonM.fontSize};
  color: ${(props) => props.theme.color.baseText};
  background-color: ${(props) => props.theme.color.baseButton};
  text-transform: uppercase;

  padding: 0.5rem;

  border: none;
  border-radius: ${(props) => props.theme.borderRadius};

  svg {
    color: ${(props) => props.theme.color.purple};
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.baseSubtitle};
    background-color: ${(props) => props.theme.color.baseHover};
    svg {
      color: ${(props) => props.theme.color.purpleDark};
    }
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`
export const Divider = styled.hr`
  margin: 1.5rem 0;
  border: 1px solid ${(props) => props.theme.color.baseButton};
`
