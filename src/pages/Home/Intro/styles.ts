import styled from 'styled-components'
import backgroundImage from '../../../assets/home-intro-background.svg'

export const Container = styled.div`
  display: flex;
  gap: 3.5rem;
  padding: 5.75rem 10rem;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100vw;
`

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.typography.roboto.fontFamily};
  font-size: ${(props) => props.theme.typography.roboto.sizes.textL};
  margin-top: 1rem;
`

export const ItemContainer = styled.div`
  display: flex;
  margin-top: 4.125rem;
  gap: 2.5rem;
`

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

interface IItemIconProps {
  color: 'yellow' | 'yellowDark' | 'baseText' | 'purple'
}

export const ItemIcon = styled.div<IItemIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;

  color: ${(props) => props.theme.color.background};
  background-color: ${(props) => props.theme.color[props.color]};
`
