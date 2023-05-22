import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.color.baseCard};
  width: 16rem;

  padding-bottom: 1.25rem;

  border-top-right-radius: 36px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }
`
export const TagList = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;

  li {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme.color.yellowLight};
    color: ${(props) => props.theme.color.yellowDark};
    font-weight: bold;
    text-transform: uppercase;
    font-size: ${(props) => props.theme.typography.roboto.sizes.tag.fontSize};
    line-height: ${(props) =>
      props.theme.typography.roboto.sizes.tag.lineHeight};
  }

  margin-bottom: 1rem;
`

export const Title = styled.h4`
  color: ${(props) => props.theme.color.baseSubtitle};
`
export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.typography.roboto.sizes.textS.fontSize};
  line-height: ${(props) =>
    props.theme.typography.roboto.sizes.textS.lineHeight};
  color: ${(props) => props.theme.color.baseLabel};
  text-align: center;

  margin: 0.5rem 1.25rem 2.063rem;
`
export const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Price = styled.span`
  font-family: ${(props) => props.theme.typography.baloo2.fontFamily};
  font-size: ${(props) => props.theme.typography.baloo2.sizes.titleM.fontSize};
  line-height: ${(props) =>
    props.theme.typography.baloo2.sizes.titleM.lineHeight};
  font-weight: 800;

  margin-right: 1.438rem;

  &::before {
    content: 'R$ ';

    font-family: ${(props) => props.theme.typography.roboto.fontFamily};
    font-size: ${(props) => props.theme.typography.roboto.sizes.textM.fontSize};
    line-height: ${(props) =>
      props.theme.typography.roboto.sizes.textM.lineHeight};
    font-weight: 400;
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem;
  height: 2.375rem;

  color: ${(props) => props.theme.color.baseCard};
  background-color: ${(props) => props.theme.color.purpleDark};
  border-radius: ${(props) => props.theme.borderRadius};

  border: none;

  margin-left: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.purple};
  }
`
