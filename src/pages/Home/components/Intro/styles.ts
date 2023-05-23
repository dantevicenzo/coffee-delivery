import styled from 'styled-components'
import backgroundImage from '../../../../assets/home-intro-background.svg'

export const BackgroundContainer = styled.div`
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 100vw;
`
export const Container = styled.div`
  display: flex;
  padding: 0 1rem;
  width: 72rem;
  margin: 5.75rem auto;
  gap: 3.5rem;
`

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.typography.roboto.fontFamily};
  font-size: ${(props) => props.theme.typography.roboto.sizes.textL.fontSize};
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

  span {
    font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
  }
`

export const ItemRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
