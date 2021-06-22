import * as S from "./Text.Styles";

const Text = ({ text, color, subTitle }) => (
  <S.Text color={color} subTitle={subTitle}>
    {text}
  </S.Text>
);

export default Text;
