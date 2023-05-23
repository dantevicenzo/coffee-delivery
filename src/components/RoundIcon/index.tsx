import { ReactNode } from 'react'
import { RoundIconContainer } from './styles'

interface IRoundIconProps {
  color: 'yellow' | 'yellowDark' | 'baseText' | 'purple'
  children: ReactNode
}

export function RoundIcon({ color, children }: IRoundIconProps) {
  return <RoundIconContainer color={color}>{children}</RoundIconContainer>
}
