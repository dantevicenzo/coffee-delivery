import introImage from '../../../assets/home-intro-image.png'
import {
  Container,
  Item,
  ItemContainer,
  ItemIcon,
  ItemRow,
  Subtitle,
} from './styles'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

export function Intro() {
  return (
    <Container>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <Subtitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Subtitle>

        <ItemContainer>
          <ItemRow>
            <Item>
              <ItemIcon color="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </ItemIcon>
              <span>Compra simples e segura</span>
            </Item>
            <Item>
              <ItemIcon color="yellow">
                <Timer size={16} weight="fill" />
              </ItemIcon>
              <span>Entrega rápida e rastreada</span>
            </Item>
          </ItemRow>
          <ItemRow>
            <Item>
              <ItemIcon color="baseText">
                <Package size={16} weight="fill" />
              </ItemIcon>
              <span>Embalagem mantém o café intacto</span>
            </Item>
            <Item>
              <ItemIcon color="purple">
                <Coffee size={16} weight="fill" />
              </ItemIcon>
              <span>O café chega fresquinho até você</span>
            </Item>
          </ItemRow>
        </ItemContainer>
      </div>
      <div>
        <img src={introImage} alt="" />
      </div>
    </Container>
  )
}
