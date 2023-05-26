import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  width: 72rem;
  margin: 2rem auto;

  a:focus {
    outline: none;
    box-shadow: none;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a,
    span {
      padding: 0.5rem;
      border-radius: ${(props) => props.theme.borderRadius};
      display: flex;
      align-items: center;
      gap: 0.25rem;

      text-decoration: none;
    }
  }
`

export const CurrentLocation = styled.span`
  color: ${(props) => props.theme.color.purpleDark};
  background-color: ${(props) => props.theme.color.purpleLight};

  svg {
    color: ${(props) => props.theme.color.purple};
  }

  user-select: none;
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

    & + span {
      background: ${(props) => props.theme.color.yellow};
    }
  }
`
export const CartCounter = styled.span`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textS.fontSize};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color.white};
  background: ${(props) => props.theme.color.yellowDark};
  font-weight: bold;

  z-index: +1;
  position: relative;
  margin-left: -1.438rem;
  margin-top: -2rem;
`
