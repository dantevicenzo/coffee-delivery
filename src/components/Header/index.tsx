import {
  CartCounter,
  CartLink,
  HeaderContainer,
  CurrentLocation,
} from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

export function Header() {
  const { orderList } = useContext(CartContext)
  const cartCounter = orderList.reduce(
    (total, order) => (total += order.quantity),
    0,
  )

  const [city, setCity] = useState('Salvador')
  const [state, setState] = useState('BA')

  function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          // Fetch city and state information based on coordinates
          fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${position.coords.latitude}+${position.coords.longitude}&key=8c2137451e3a41ed9c709bbd7174dba9 `,
          )
            .then((response) => response.json())
            .then((data) => {
              const results = data.results[0]
              const components = results.components

              const cityData = components.city || components.town
              const stateData = components.state_code

              if (cityData) {
                setCity(cityData)
              }

              if (stateData) {
                setState(stateData)
              }
            })
            .catch((error) => {
              console.error('Error retrieving address:', error)
            })
        },
        function (error) {
          console.error('Error getting location:', error)
        },
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getCurrentLocation()
  }, [])

  return (
    <HeaderContainer>
      <a href="/">
        <img src={logo} />
      </a>
      <nav>
        <CurrentLocation>
          <MapPin size={24} weight="fill" />
          {city}, {state}
        </CurrentLocation>
        <CartLink href="/checkout">
          <ShoppingCart size={24} weight="fill" />
        </CartLink>
        {orderList.length > 0 && <CartCounter>{cartCounter}</CartCounter>}
      </nav>
    </HeaderContainer>
  )
}
