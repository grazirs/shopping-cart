import styled from "styled-components";

export const Input = styled.input `
  border-color: ${({theme}) => theme.colors.grey};
  padding: ${({theme}) => theme.space[1]};
  width: 100%;
  height: 35px;
  color: ${({theme}) => theme.colors.darkGrey};
  background-color: ${({theme}) => theme.colors.lightGrey};
  border: none;
  &:focus {
    border: solid 2px ${({theme}) => theme.colors.blue};
    outline: none;
  }
`
export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: ${({theme}) => theme.colors.lightGrey};
  color: ${({theme}) => theme.colors.darkGrey};
  border: none;
  &:focus {
    border: solid 2px ${({theme}) => theme.colors.blue};
    outline: none;
  }
`;
