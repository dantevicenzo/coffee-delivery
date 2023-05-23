import {
  CartCounter,
  CartLink,
  HeaderContainer,
  SetLocationLink,
} from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

export function Header() {
  const { orderList } = useContext(CartContext)
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
        {orderList.length > 0 && <CartCounter>{orderList.length}</CartCounter>}
      </nav>
    </HeaderContainer>
  )
}
