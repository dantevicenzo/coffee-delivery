import {
  CoffeeCardList,
  Container,
  FilterList,
  Title,
  TitleFilterContainer,
} from './styles'
import { CoffeeCard } from '../CoffeeCard'
import { defaultCoffeeList } from './defaultCoffeeList'
import { useState } from 'react'

export function CoffeeList() {
  const [filterTag, setFilterTag] = useState('')

  function handleButtonSetFilterTag(tag: string) {
    if (filterTag === tag) {
      setFilterTag('')
    } else {
      setFilterTag(tag)
    }
  }

  function filteredCoffeeList() {
    if (filterTag === '') {
      return defaultCoffeeList
    } else {
      return defaultCoffeeList.filter(
        (coffee) => coffee.tags.indexOf(filterTag.toLocaleLowerCase()) > -1,
      )
    }
  }

  const tagsList = [
    ...new Set(defaultCoffeeList.flatMap((coffee) => coffee.tags)),
  ]

  return (
    <Container>
      <TitleFilterContainer>
        <Title>Nossos Cafés</Title>
        <FilterList>
          {tagsList.map((tag) => (
            <li key={tag}>
              <button
                className={filterTag === tag ? 'selected' : ''}
                onClick={() => handleButtonSetFilterTag(tag)}
              >
                {tag}
              </button>
            </li>
          ))}
        </FilterList>
      </TitleFilterContainer>
      <CoffeeCardList>
        {filteredCoffeeList().map((coffee) => (
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
