import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.baseButton};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.5rem;
  max-width: 5rem;
`
export const StepButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.purple};
  background-color: transparent;
  border: none;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.purpleDark};
  }
`

export const StyledInputNumber = styled.input`
  width: 1.5rem;
  text-align: center;
  line-height: 0;
  margin: 0 0.25rem;
  border: none;
  background-color: transparent;
  font-family: ${(props) => props.theme.typography.roboto.fontFamily};
  font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
  color: ${(props) => props.theme.color.baseTitle};
`
