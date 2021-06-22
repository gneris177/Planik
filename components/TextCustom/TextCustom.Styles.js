import styled from "styled-components";
import fonts from "../style/fonts";

const size = (prop) => {
  switch (prop) {
    case "medio":
      return "1.2em";
      break;
    case "lower":
      return "0.9em";
      break;
    default:
      "1.3em";
      break;
  }
};

export const Text = styled.p`
  font-family: ${fonts.montserrat};
  font-size: ${props => size(props.size)};
  font-weight: ${props => props.size=='medio' ? 500 : 700};
  color:${props => props.color};
`;
