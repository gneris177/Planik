import styled from "styled-components";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline"
import Image from 'next/image'

export const ContainerMain = styled.div`
  display: flex;
`;

export const Icon = styled(ArrowIosDownwardOutline)`
  width: 10px;
`;

export const PhotoPerfil = styled(Image)`
  border-radius: 10rem;
`;