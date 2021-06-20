import * as S from "./Overview.Styles";
import Image from "next/image";

//components
import ArrowText from "../ArrowText";
import Text from "../Text";

const Overview = ({
  title,
  graphic,
  arrowText,
  texts,
  defaultSize,
  textLink = "ver mais detalhes",
  link,
}) => (
  <S.ContainerMain defaultSize={defaultSize}>
    <S.Header>
      <Text text={title} subTitle />
      <S.Line />
    </S.Header>

    {graphic && (
      <Image
        src="/img/graphic.png"
        alt="Foto de perfil do usuário"
        width={100}
        height={100}
      />
    )}
    {arrowText && arrowText.map((item, i) => <ArrowText text={item} />)}
    {texts &&
      texts.map((item, i) => (
        <S.ConatinerText>
          <Text text={item} />
        </S.ConatinerText>
      ))}

    <S.Footer>
      <S.Line />
      <S.Link>{textLink}</S.Link>
    </S.Footer>
  </S.ContainerMain>
);

export default Overview;
