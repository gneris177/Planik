import styled from "styled-components";
import fonts from "../style/fonts";
import { ArrowIosForwardOutline } from "@styled-icons/evaicons-outline/ArrowIosForwardOutline";

export const Container = styled.div`
  display: flex;
  padding: 0.4rem;
`;

export const Text = styled.p`
  margin-right: 20px;
`;

export const Icon = styled(ArrowIosForwardOutline)`
  width: 18px;
  color: #d251a2;
`;
