import styled from 'styled-components'

interface IRoundIconContainer {
  color: 'yellow' | 'yellowDark' | 'baseText' | 'purple'
}

export const RoundIconContainer = styled.div<IRoundIconContainer>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  color: ${(props) => props.theme.color.background};
  background-color: ${(props) => props.theme.color[props.color]};
`
