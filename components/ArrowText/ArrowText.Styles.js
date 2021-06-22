import styled from "styled-components";
import fonts from "../style/fonts";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";

export const Container = styled.div`
  display: flex;
  padding: 0.3rem;
`;

export const Icon = styled(ArrowIosForwardOutline)`
  width: 18px;
  margin-left: 2rem;
  color: #d251a2;
`;
