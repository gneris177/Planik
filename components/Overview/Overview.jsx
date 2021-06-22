import * as S from "./Overview.Styles";
import Image from "next/image";

//components
import ArrowText from "../ArrowText";
import Text from "../Text";
import TextCustom from "../TextCustom";

const Overview = ({
  title,
  graphic,
  arrowText,
  textStrong,
  textStrongColor,
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

    <TextCustom text={textStrong} color={textStrongColor} />

    {graphic && (
      <S.ConatinerImg>
        <Image
          src="/img/54601b4a-aa72-4bc7-916a-8d1e018191a6.jpeg"
          alt="Foto de perfil do usuário"
          width={239}
          height={178}
        />
      </S.ConatinerImg>
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
