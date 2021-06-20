import styled from "styled-components";
import fonts from "../style/fonts";

export const Title = styled.div`
  text-align: center;
`;
export const ColorP = styled.h1`
  display: inline;
  font-size: 2em;
  font-family: ${fonts.montserrat};
  color: #d356a5;
`;
export const ColorS = styled(ColorP)`
  font-weight: 400;
  color: #000;
`;
