import styled from "styled-components";

export const ContainerMain = styled.div`
  padding: 1%;
  width: 90%;
  height: ${(props) => (props.defaultSize ? "300px" : "500px")};
  background: #fff;
`;
export const Header = styled.header`
  padding: 0 1em;
`;

export const Line = styled.hr`
  opacity: 0.2;
`;

export const ConatinerText = styled.div`
  padding: 0.3em;
`;

export const Footer = styled.footer`
  text-align: center;
`;

export const Link = styled.a`
  font-size: 0.7em;
  font-weight: 600;
  color: #5898ff;
`;