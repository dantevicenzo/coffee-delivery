import { ICoffeeCardProps } from '../CoffeeCard'

import imgExpressoTradicional from '../../../../assets/Type=Expresso.png'
import imgExpressoAmericano from '../../../../assets/Type=Americano.png'
import imgExpressoCremoso from '../../../../assets/Type=Expresso Cremoso.png'
import imgExpressoGelado from '../../../../assets/Type=Café Gelado.png'
import imgCafeComLeite from '../../../../assets/Type=Café com Leite.png'
import imgLatte from '../../../../assets/Type=Latte.png'
import imgCapuccino from '../../../../assets/Type=Capuccino.png'
import imgMacchiato from '../../../../assets/Type=Macchiato.png'
import imgMocaccino from '../../../../assets/Type=Mocaccino.png'
import imgChocolateQuente from '../../../../assets/Type=Chocolate Quente.png'
import imgCubano from '../../../../assets/Type=Cubano.png'
import imgHavaiano from '../../../../assets/Type=Havaiano.png'
import imgArabe from '../../../../assets/Type=Árabe.png'
import imgIrlandes from '../../../../assets/Type=Irlandês.png'

export const defaultCoffeeList: ICoffeeCardProps[] = [
  {
    id: 'expressoTradicional',
    imgSrc: imgExpressoTradicional,
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    subtitle: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
  {
    id: 'expressoAmericano',
    imgSrc: imgExpressoAmericano,
    tags: ['tradicional'],
    title: 'Expresso Americano',
    subtitle: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
  },
  {
    id: 'expressoCremoso',
    imgSrc: imgExpressoCremoso,
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    subtitle: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
  },
  {
    id: 'expressoGelado',
    imgSrc: imgExpressoGelado,
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    subtitle: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
  },
  {
    id: 'cafeComLeite',
    imgSrc: imgCafeComLeite,
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    subtitle: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
  },
  {
    id: 'latte',
    imgSrc: imgLatte,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    subtitle: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
  },
  {
    id: 'capuccino',
    imgSrc: imgCapuccino,
    tags: ['tradicional', 'com leite'],
    title: 'Capuccino',
    subtitle: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
  },
  {
    id: 'macchiato',
    imgSrc: imgMacchiato,
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    subtitle: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
  },
  {
    id: 'mocaccino',
    imgSrc: imgMocaccino,
    tags: ['tradicional', 'com leite'],
    title: 'Mocaccino',
    subtitle: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
  },
  {
    id: 'chocolateQuente',
    imgSrc: imgChocolateQuente,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    subtitle: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
  },
  {
    id: 'cubano',
    imgSrc: imgCubano,
    tags: ['especial', 'alcoólico', 'gelado'],
    title: 'Cubano',
    subtitle: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
  },
  {
    id: 'havaiano',
    imgSrc: imgHavaiano,
    tags: ['especial'],
    title: 'Havaiano',
    subtitle: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
  },
  {
    id: 'árabe',
    imgSrc: imgArabe,
    tags: ['especial'],
    title: 'Árabe',
    subtitle: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
  },
  {
    id: 'irlandês',
    imgSrc: imgIrlandes,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    subtitle: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
  },
]
