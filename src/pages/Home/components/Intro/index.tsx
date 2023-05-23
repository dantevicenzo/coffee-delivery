import introImage from '../../../../assets/home-intro-image.png'
import { RoundIcon } from '../../../../components/RoundIcon'
import {
  BackgroundContainer,
  Container,
  Item,
  ItemContainer,
  ItemRow,
  Subtitle,
} from './styles'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

export function Intro() {
  return (
    <BackgroundContainer>
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
                <RoundIcon color="yellowDark">
                  <ShoppingCart size={16} weight="fill" />
                </RoundIcon>
                <span>Compra simples e segura</span>
              </Item>
              <Item>
                <RoundIcon color="yellow">
                  <Timer size={16} weight="fill" />
                </RoundIcon>
                <span>Entrega rápida e rastreada</span>
              </Item>
            </ItemRow>
            <ItemRow>
              <Item>
                <RoundIcon color="baseText">
                  <Package size={16} weight="fill" />
                </RoundIcon>
                <span>Embalagem mantém o café intacto</span>
              </Item>
              <Item>
                <RoundIcon color="purple">
                  <Coffee size={16} weight="fill" />
                </RoundIcon>
                <span>O café chega fresquinho até você</span>
              </Item>
            </ItemRow>
          </ItemContainer>
        </div>
        <div>
          <img src={introImage} alt="" />
        </div>
      </Container>
    </BackgroundContainer>
  )
}
