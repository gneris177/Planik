import * as S from "./ArrowText.Styles";
import Text from "../Text";

const ArrowText = ({ text }) => (
  <S.Container>
    <Text text={text} />
    <S.Icon />
  </S.Container>
);

export default ArrowText;
