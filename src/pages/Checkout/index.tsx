import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  Form,
  FormContainer,
  FormCard,
  FormTitleContainer,
  InputContainer,
  InputRow,
  TextMedium,
  TextSmall,
  TitleExtraSmall,
  FormRow,
  PaymentMethodList,
  OrderConfirmationCard,
  OrderPriceRow,
  OrderPriceContainer,
  OrderPriceTitle,
  OrderPriceValue,
  ConfirmOrderButton,
  ExtendedOptionalPlaceholder,
  InputText,
} from './styles'

import { OrderItem } from './OrderItem'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const orderFormValidationSchema = z.object({
  cep: z.string().min(1, { message: 'Informe o CEP' }),
  city: z.string().min(1, { message: 'Informe a Cidade' }),
  compliment: z.string().optional(),
  district: z.string().min(1, { message: 'Informe o Bairro' }),
  number: z.string().min(1, { message: 'Informe o Número' }),
  street: z.string().min(1, { message: 'Informe a Rua' }),
  uf: z.string().min(1, { message: 'Informe o Estado' }),
  paymentMethod: z.union([
    z.literal('creditCard'),
    z.literal('debitCard'),
    z.literal('money'),
  ]),
})

export type TCheckoutFormData = z.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const { orderList, getCoffeeDataById, completeOrder } =
    useContext(CartContext)
  const navigate = useNavigate()

  const { register, handleSubmit, watch, setValue } =
    useForm<TCheckoutFormData>({
      resolver: zodResolver(orderFormValidationSchema),
    })

  function onSubmit(formData: TCheckoutFormData) {
    completeOrder(formData)
    navigate('/success')
  }

  const paymentMethod = watch('paymentMethod')

  const isSelectedCreditCard = paymentMethod === 'creditCard'
  const isSelectedDebitCard = paymentMethod === 'debitCard'
  const isSelectedMoney = paymentMethod === 'money'

  function handleSetPaymentMethod(
    paymentMethod: 'creditCard' | 'debitCard' | 'money',
  ) {
    setValue('paymentMethod', paymentMethod)
  }

  const DELIVERY_FEE = 3.5

  function calcCoffeePriceVsQuantity(id: string, quantity: number) {
    const coffeePrice = Number(getCoffeeDataById(id).price.replace(',', '.'))
    const total = coffeePrice * quantity
    return total.toFixed(2).replace('.', ',')
  }

  function getTotalItemsPrice() {
    const total = orderList.reduce(
      (total, item) =>
        Number(getCoffeeDataById(item.id).price.replace(',', '.')) *
          item.quantity +
        total,
      0,
    )
    return total.toFixed(2)
  }

  function getTotalOrderPrice() {
    const total = Number(getTotalItemsPrice()) + DELIVERY_FEE
    return total.toFixed(2)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <TitleExtraSmall>Complete seu pedido</TitleExtraSmall>
        <FormContainer>
          <FormCard>
            <FormTitleContainer color="yellowDark">
              <MapPin size={18} />
              <div>
                <TextMedium>Endereço de Entrega</TextMedium>
                <TextSmall>
                  Informe o endereço onde deseja receber seu pedido
                </TextSmall>
              </div>
            </FormTitleContainer>

            <InputContainer>
              <InputText
                variantSize="M"
                type="text"
                placeholder="CEP"
                {...register('cep', { required: true })}
              />
              <InputText
                variantSize="L"
                type="text"
                placeholder="Rua"
                {...register('street', { required: true })}
              />
              <InputRow>
                <InputText
                  variantSize="M"
                  type="text"
                  placeholder="Número"
                  {...register('number', { required: true })}
                />
                <ExtendedOptionalPlaceholder>
                  <InputText
                    variantSize="FLEX"
                    type="text"
                    placeholder="Complemento"
                    {...register('compliment')}
                  />
                </ExtendedOptionalPlaceholder>
              </InputRow>
              <InputRow>
                <InputText
                  variantSize="M"
                  type="text"
                  placeholder="Bairro"
                  {...register('district', { required: true })}
                />
                <InputText
                  variantSize="FLEX"
                  type="text"
                  placeholder="Cidade"
                  {...register('city', { required: true })}
                />
                <InputText
                  variantSize="S"
                  type="text"
                  placeholder="UF"
                  {...register('uf', { required: true })}
                />
              </InputRow>
            </InputContainer>
          </FormCard>
          <FormCard>
            <FormTitleContainer color="purple">
              <CurrencyDollar size={18} />
              <div>
                <TextMedium>Pagamento</TextMedium>
                <TextSmall>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </TextSmall>
              </div>
            </FormTitleContainer>
            <select hidden {...register('paymentMethod', { required: true })}>
              <option selected disabled hidden></option>
              <option value="creditCard">Cartão de crédito</option>
              <option value="debitCard">Cartão de débito</option>
              <option value="money">Dinheiro</option>
            </select>
            <PaymentMethodList>
              <li>
                <button
                  type="button"
                  onClick={() => handleSetPaymentMethod('creditCard')}
                  className={isSelectedCreditCard ? 'selected' : ''}
                >
                  <CreditCard size={16} />
                  Cartão de crédito
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSetPaymentMethod('debitCard')}
                  className={isSelectedDebitCard ? 'selected' : ''}
                >
                  <Bank size={16} />
                  Cartão de débito
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleSetPaymentMethod('money')}
                  className={isSelectedMoney ? 'selected' : ''}
                >
                  <Money size={16} />
                  Dinheiro
                </button>
              </li>
            </PaymentMethodList>
          </FormCard>
        </FormContainer>
      </FormRow>
      <FormRow>
        <TitleExtraSmall>Cafés selecionados</TitleExtraSmall>
        <OrderConfirmationCard>
          {orderList.length > 0 ? (
            <>
              {orderList.map((product) => (
                <OrderItem
                  key={product.id}
                  id={product.id}
                  imgSrc={getCoffeeDataById(product.id).imgSrc}
                  title={getCoffeeDataById(product.id).title}
                  price={calcCoffeePriceVsQuantity(
                    product.id,
                    product.quantity,
                  )}
                  quantity={product.quantity}
                />
              ))}
              <OrderPriceContainer>
                <OrderPriceRow>
                  <OrderPriceTitle>Total de itens</OrderPriceTitle>
                  <OrderPriceValue>
                    R$ {getTotalItemsPrice().replace('.', ',')}
                  </OrderPriceValue>
                </OrderPriceRow>
                <OrderPriceRow>
                  <OrderPriceTitle>Entrega</OrderPriceTitle>
                  <OrderPriceValue>
                    R$ {DELIVERY_FEE.toFixed(2).replace('.', ',')}
                  </OrderPriceValue>
                </OrderPriceRow>
                <OrderPriceRow>
                  <OrderPriceTitle>Total</OrderPriceTitle>
                  <OrderPriceValue>
                    R$ {getTotalOrderPrice().replace('.', ',')}
                  </OrderPriceValue>
                </OrderPriceRow>
              </OrderPriceContainer>
              <ConfirmOrderButton type="submit">
                Confirmar Pedido
              </ConfirmOrderButton>
            </>
          ) : (
            <TextMedium>Seu carrinho está vazio.</TextMedium>
          )}
        </OrderConfirmationCard>
      </FormRow>
    </Form>
  )
}
