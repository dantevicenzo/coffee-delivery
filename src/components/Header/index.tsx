import { CartLink, HeaderContainer, SetLocationLink } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} />
      </a>
      <nav>
        <SetLocationLink href="/">
          <MapPin size={24} weight="fill" />
          Salvador, BA
        </SetLocationLink>
        <CartLink href="/checkout">
          <ShoppingCart size={24} weight="fill" />
        </CartLink>
      </nav>
    </HeaderContainer>
  )
}
