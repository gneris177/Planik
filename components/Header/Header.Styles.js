import styled from "styled-components";
import { Menu } from "@styled-icons/heroicons-solid/Menu";

export const ContainerMain = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${(props) =>
    props.headerLogin ? "0 0 0 4rem" : "0.2rem 0.4rem 0.2rem 4em"};
  background: #fff;
  box-shadow: 0 5px 6px -6px #d4d4d9;
`;

export const ContainerSecundary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerBtn = styled(ContainerSecundary)`
  display: flex;
`;

export const ContainerMenu = styled.nav`
  display: flex;
  width: 30%;
  padding: .7em ;
  background: #000;
`;

export const IconMenu = styled(Menu)`
  color: #fff;
  width: 25px;
`;
