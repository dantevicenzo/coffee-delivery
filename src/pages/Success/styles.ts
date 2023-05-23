import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10rem;
`
export const TitleContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
`

export const TitleL = styled.h2`
  font-size: ${(props) => props.theme.typography.baloo2.sizes.titleL.fontSize};
  color: ${(props) => props.theme.color.yellowDark};
`
export const TextL = styled.p`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textL.fontSize};
  color: ${(props) => props.theme.color.baseSubtitle};
`
export const TextM = styled.p`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
  color: ${(props) => props.theme.color.baseText};
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImageColumn = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  padding: 2.5rem;

  position: relative;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme.color.yellow},
      ${(props) => props.theme.color.purple}
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`
export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const InfoRow = styled.div`
  display: flex;
  gap: 0.75rem;
`
