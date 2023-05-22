import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      padding: 0.5rem;
      border-radius: ${(props) => props.theme.borderRadius};
      display: flex;
      align-items: center;
      gap: 0.25rem;

      text-decoration: none;
    }
  }
`

export const SetLocationLink = styled.a`
  color: ${(props) => props.theme.color.purpleDark};
  background-color: ${(props) => props.theme.color.purpleLight};

  svg {
    color: ${(props) => props.theme.color.purple};
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.color.purpleLight};
    background-color: ${(props) => props.theme.color.purpleDark};
  }
`
export const CartLink = styled.a`
  background-color: ${(props) => props.theme.color.yellowLight};

  svg {
    color: ${(props) => props.theme.color.yellowDark};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.yellowDark};

    svg {
      color: ${(props) => props.theme.color.yellowLight};
    }
  }
`
