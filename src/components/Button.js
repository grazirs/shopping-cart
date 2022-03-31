import styled from "styled-components";

export const Button = styled.button `
  background-color: ${({theme}) => theme.colors.blue};
  min-width: 64px;
  text-transform: uppercase;
  border-radius: ${({theme})=> `${theme.radii[1]}px`};
  padding: ${({theme}) => `${theme.space[2]}px`};
  border: none;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  text-align: center;
  &:disabled {
    background-color: ${({theme}) => theme.colors.grey};
    color: ${({theme}) => theme.colors.darkGrey};
  }
`
