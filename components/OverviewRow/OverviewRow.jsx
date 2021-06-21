import * as S from "./OverviewRow.Styles";
import Image from "next/image";

import ArrowText from "../ArrowText";
import Text from "../Text";

const OverviewRow = ({ title, defaultSize, textLink }) => (
  <S.ContainerMain defaultSize={defaultSize}>
    <S.Header>
      <Text text={title} subTitle />
      <S.Link>{textLink}</S.Link>
    </S.Header>
    <S.Line />
    <Image
      src="/img/8b1ac045-4ca9-41aa-aa55-cdc4061827a4.jpeg"
      alt="Foto de perfil do usuário"
      width={500}
      height={80}
    />
  </S.ContainerMain>
);

export default OverviewRow;
