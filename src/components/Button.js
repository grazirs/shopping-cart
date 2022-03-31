import styled from "styled-components";

export const Button = styled.button `
  background-color: ${({theme}) => theme.colors.blue};
  min-width: 64px;
  height:30px;
  text-transform: uppercase;
  border-radius: ${({theme})=> `${theme.radii[1]}px`};
  border: none;
  color: ${({theme}) => theme.colors.white};
  cursor: pointer;
  text-align: center;
  margin-left: ${({theme}) => `${theme.space[2]}px`};
  &:disabled {
    background-color: ${({theme}) => theme.colors.grey};
    color: ${({theme}) => theme.colors.darkGrey};
  }
`
