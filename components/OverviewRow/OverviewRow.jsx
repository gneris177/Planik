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
      src="/img/ilustracao.png"
      alt="Foto de perfil do usuário"
      width={450}
      height={55}
    />
  </S.ContainerMain>
);

export default OverviewRow;
