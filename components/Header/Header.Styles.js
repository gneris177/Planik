import styled from "styled-components";
import { Menu } from "@styled-icons/heroicons-solid/Menu";

export const ContainerMain = styled.header`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.headerUser?"0.3rem 0.4rem 0.3rem 3rem":"0 0 0 9rem"};
  background: #fff;
  box-shadow: 0 6px 7px -6px #d4d4d9;
  @media (max-width: 900px) {
    padding: ${(props) => props.headerLogin&&"0"};
  }
`;

export const ContainerSecundary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerBtn = styled(ContainerSecundary)`
  margin-left: 0.4rem;
`;

export const ContainerMenu = styled.nav`
  display: flex;
  width: 35%;
  padding: 0.7em;
  background: #000;
`;

export const IconMenu = styled(Menu)`
  color: #fff;
  width: 25px;
  margin-right: 1rem;
`;
