import styled from 'styled-components'

export const Container = styled.div`
  width: 72rem;
  padding: 0 1rem;
  margin: 2rem auto 6rem;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  color: ${(props) => props.theme.color.baseSubtitle};
`

export const TitleFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 3.375rem;
`
export const FilterList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;

  button {
    border: 1px solid ${(props) => props.theme.color.yellow};
    border-radius: 100px;
    padding: 0.375rem 0.75rem;
    font-size: 0;

    margin: 0;
    text-decoration: none;
    color: ${(props) => props.theme.color.yellowDark};
    font-size: ${(props) => props.theme.typography.roboto.sizes.tag.fontSize};
    font-weight: bold;
    text-transform: uppercase;

    &:focus {
      outline: none;
      box-shadow: none;
    }

    &:hover {
      cursor: pointer;
      background-color: ${(props) => props.theme.color.yellowDark};
      color: ${(props) => props.theme.color.background};
    }

    &.selected {
      background-color: ${(props) => props.theme.color.yellowDark};
      color: ${(props) => props.theme.color.background};
    }
  }
`

export const CoffeeCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`
