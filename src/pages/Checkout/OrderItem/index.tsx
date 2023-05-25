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
import { useContext, useState } from 'react'
import { CartContext } from '../../../contexts/CartContextProvider'

interface IOrderItemProps {
  id: string
  imgSrc: string
  title: string
  price: string
  quantity: number
}

export function OrderItem({ id, imgSrc, title, price }: IOrderItemProps) {
  const { removeProduct } = useContext(CartContext)
  const [inputQuantity, setInputQuantity] = useState(0)

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
              <InputNumber
                id={id}
                value={inputQuantity}
                setValue={setInputQuantity}
                changeOrderQuantity
              />
              <RemoveButton type="button" onClick={handleRemoveProduct}>
                <Trash size={16} />
                Remover
              </RemoveButton>
            </ActionsContainer>
          </div>
        </InfoContainer>
        <PriceText>R$ {price}</PriceText>
      </Container>
      <Divider />
    </>
  )
}
