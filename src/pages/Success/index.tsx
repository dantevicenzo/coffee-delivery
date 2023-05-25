import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { RoundIcon } from '../../components/RoundIcon'
import {
  Container,
  InfoColumn,
  InfoContainer,
  InfoRow,
  InfoTextContainer,
  TextL,
  TextM,
  TitleContainer,
  TitleL,
} from './styles'
import deliveryImage from '../../assets/delivery-image.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

export function Success() {
  const { deliveryAddress, paymentMethod } = useContext(CartContext)

  function getFormattedPaymentMethod() {
    switch (paymentMethod) {
      case 'creditCard':
        return 'Cartão de Crédito'
      case 'debitCard':
        return 'Cartão de Débito'
      case 'money':
        return 'Dinheiro'
    }
  }

  return (
    <Container>
      <TitleContainer>
        <TitleL>Uhu! Pedido confirmado</TitleL>
        <TextL>Agora é só aguardar que logo o café chegará até você</TextL>
      </TitleContainer>
      <InfoContainer>
        <InfoColumn>
          <InfoRow>
            <RoundIcon color="purple">
              <MapPin size={16} weight="fill" />
            </RoundIcon>
            <InfoTextContainer>
              <TextM>
                Entrega em
                <strong>{` ${deliveryAddress?.street}, ${deliveryAddress?.number}`}</strong>
              </TextM>
              <TextM>
                {`${deliveryAddress?.district} - ${deliveryAddress?.city}, ${deliveryAddress?.uf}`}
              </TextM>
            </InfoTextContainer>
          </InfoRow>
          <InfoRow>
            <RoundIcon color="yellow">
              <Timer size={16} weight="fill" />
            </RoundIcon>
            <InfoTextContainer>
              <TextM>Previsão de entrega</TextM>
              <TextM>
                <strong>20 min - 30 min</strong>
              </TextM>
            </InfoTextContainer>
          </InfoRow>
          <InfoRow>
            <RoundIcon color="yellowDark">
              <CurrencyDollar size={16} />
            </RoundIcon>
            <InfoTextContainer>
              <TextM>Pagamento na entrega</TextM>
              <TextM>
                <strong>{getFormattedPaymentMethod()}</strong>
              </TextM>
            </InfoTextContainer>
          </InfoRow>
        </InfoColumn>
        <img src={deliveryImage} alt="" />
      </InfoContainer>
    </Container>
  )
}
