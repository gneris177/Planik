import styled from "styled-components";
import fonts from "../style/fonts";

const color = (prop) => {
  switch (prop) {
    case "black":
      return "#000";
      break;
    case "white":
      return "#fff";
      break;
    default:
      "#000";
      break;
  }
};

export const Text = styled.p`
  font-family: ${fonts.montserrat};
  font-size: ${(props) => props.subTitle?'0.8em':'0.6em'};
  font-weight: ${(props) => props.subTitle&&'800'};
  color: ${(props) => color(props.color)};
`;
