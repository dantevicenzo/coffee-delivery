import { InputNumber } from '../../../components/InputNumber'

import { Trash } from '@phosphor-icons/react'
import {
  Container,
  ActionsContainer,
  CoffeeImg,
  CoffeeTitle,
  InfoContainer,
  PriceText,
  RemoveButton,
} from './styles'

interface IOrderItemProps {
  id: string
  imgSrc: string
  title: string
  price: string
}

export function OrderItem({ id, imgSrc, title, price }: IOrderItemProps) {
  return (
    <Container>
      <InfoContainer>
        <CoffeeImg src={imgSrc} />
        <div>
          <CoffeeTitle>{title}</CoffeeTitle>
          <ActionsContainer>
            <InputNumber id={id} />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </InfoContainer>
      <PriceText>{price}</PriceText>
    </Container>
  )
}
