import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { RoundIcon } from '../../components/RoundIcon'
import {
  Container,
  ImageColumn,
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

export function Success() {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </TextM>
              <TextM>Farrapos - Porto Alegre, RS</TextM>
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
                <strong>Cartão de Crédito</strong>
              </TextM>
            </InfoTextContainer>
          </InfoRow>
        </InfoColumn>
        <ImageColumn>
          <img src={deliveryImage} />
        </ImageColumn>
      </InfoContainer>
    </Container>
  )
}
