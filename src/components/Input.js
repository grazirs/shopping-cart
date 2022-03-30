import styled from "styled-components";

export const Input = styled.input `
  border-color: ${({theme}) => theme.colors.grey};
  padding: ${({theme}) => theme.space[1]};
  width: 100%;
  color: ${({theme}) => theme.colors.darkGrey};
  border: none;
  border-bottom: solid 1x ${({theme}) => theme.colors.blue};
  &:focus {
    border: none;
    border: solid 2px ${({theme}) => theme.colors.blue};
    outline: none;
    border-radius: ${({theme}) => theme.radii[1]};
  }
`
