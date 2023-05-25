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
import { useContext, useState } from 'react'

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
  const [inputQuantity, setInputQuantity] = useState(0)

  function handleAddToCart() {
    if (inputQuantity > 0) {
      addProduct(id, inputQuantity)
    }
    setInputQuantity(0)
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
        <InputNumber
          id={id}
          value={inputQuantity}
          setValue={setInputQuantity}
        />
        <AddToCartButton onClick={handleAddToCart}>
          <ShoppingCart size={18} weight="fill" />
        </AddToCartButton>
      </PriceInputContainer>
    </Container>
  )
}
