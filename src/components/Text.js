import styled, { css } from "styled-components";
import theme from "../theme";

export const Text = styled("h1").attrs(({ level }) => ({
  as: `h${level}`,
}))`
  ${({color, fontSize, fontWeight, align}) => css`
    font-size: ${theme.fontSizes[fontSize]};
    color: ${theme.colors[color]};
    font-weight: ${theme.fontWeights[fontWeight]};
    text-align: ${align};
  `}
`;
