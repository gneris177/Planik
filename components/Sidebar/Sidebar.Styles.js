import styled from "styled-components";
import { Menu } from "@styled-icons/heroicons-solid/Menu";

export const ContainerMain = styled.aside`
  padding: 0.3rem 1.1rem;
  background: #000;
  @media (max-width: 900px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ConatainerLogo = styled.figure`
  margin-left: 0.5rem;
`;

export const ContainerItem = styled.div`
  display: flex;
  padding: 0.2rem;
  @media (max-width: 900px) {
    display: none;
  }

  svg {
    width: 13px;
    margin-right: 0.5rem;
    color: #fff;
  }
`;

export const IconMenu = styled(Menu)`
  display: none;
  @media (max-width: 900px) {
    display: block;
    color: #fff;
    width: 32px;
  }
`;
