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
  Divider,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContextProvider'

interface IOrderItemProps {
  id: string
  imgSrc: string
  title: string
  price: string
  quantity: number
}

export function OrderItem({
  id,
  imgSrc,
  title,
  price,
  quantity,
}: IOrderItemProps) {
  const { removeProduct } = useContext(CartContext)

  function handleRemoveProduct() {
    removeProduct(id)
  }

  return (
    <>
      <Container>
        <InfoContainer>
          <CoffeeImg src={imgSrc} />
          <div>
            <CoffeeTitle>{title}</CoffeeTitle>
            <ActionsContainer>
              <InputNumber id={id} quantity={quantity} changeOrderQuantity />
              <RemoveButton type="button" onClick={handleRemoveProduct}>
                <Trash size={16} />
                Remover
              </RemoveButton>
            </ActionsContainer>
          </div>
        </InfoContainer>
        <PriceText>{price}</PriceText>
      </Container>
      <Divider />
    </>
  )
}
