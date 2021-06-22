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
  width: 200px;
  font-size: 0.7em;
  font-weight: ${(props) => (props.subTitle ? "800" : "400")};
  color: ${(props) => color(props.color)};
`;

export const Title = styled.h3`
  font-size: 1.5em;
  margin: 0;
`;
