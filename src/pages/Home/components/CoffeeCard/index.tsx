import {
  AddToCartButton,
  Container,
  Price,
  PriceInputContainer,
  Subtitle,
  TagList,
  Title,
} from './styles'
import { InputNumber } from '../../../../components/InputNumber'
import { ShoppingCart } from '@phosphor-icons/react'
import { CartContext } from '../../../../contexts/CartContextProvider'
import { useContext } from 'react'

export interface ICoffeeCardProps {
  id: string
  imgSrc: string
  tags: string[]
  title: string
  subtitle: string
  price: string
}

export function CoffeeCard({
  id,
  tags,
  title,
  subtitle,
  price,
  imgSrc,
}: ICoffeeCardProps) {
  const { addProduct } = useContext(CartContext)

  function handleAddToCart() {
    const quantity = Number(getInputNumber()?.value)
    if (quantity > 0) {
      addProduct(id, quantity)
    }
  }

  function getInputNumber() {
    return document.getElementById(`input-${id}`) as HTMLInputElement | null
  }

  return (
    <Container>
      <img src={imgSrc} alt="" />
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </TagList>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <PriceInputContainer>
        <Price>{price}</Price>
        <InputNumber id={`input-${id}`} />
        <AddToCartButton onClick={handleAddToCart}>
          <ShoppingCart size={18} weight="fill" />
        </AddToCartButton>
      </PriceInputContainer>
    </Container>
  )
}
