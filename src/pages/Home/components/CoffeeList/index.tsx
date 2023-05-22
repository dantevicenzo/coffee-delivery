import {
  CoffeeCardList,
  Container,
  FilterList,
  Title,
  TitleFilterContainer,
} from './styles'
import { CoffeeCard } from '../CoffeeCard'
import { defaultCoffeeList } from './defaultCoffeeList'

export function CoffeeList() {
  return (
    <Container>
      <TitleFilterContainer>
        <Title>Nossos Cafés</Title>
        <FilterList>
          <li>
            <a href="#">Tradicional</a>
          </li>
          <li>
            <a href="#">Especial</a>
          </li>
          <li>
            <a href="#">Com Leite</a>
          </li>
          <li>
            <a href="#">Alcóolico</a>
          </li>
          <li>
            <a href="#">Gelado</a>
          </li>
        </FilterList>
      </TitleFilterContainer>
      <CoffeeCardList>
        {defaultCoffeeList.map((coffee) => (
          <CoffeeCard
            key={coffee.id}
            id={coffee.id}
            imgSrc={coffee.imgSrc}
            tags={coffee.tags}
            title={coffee.title}
            subtitle={coffee.subtitle}
            price={coffee.price}
          />
        ))}
      </CoffeeCardList>
    </Container>
  )
}
