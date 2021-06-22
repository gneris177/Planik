import * as S from "./TextCustom.Styles";

const TextCustom = ({ text, colortext, size, color }) => (
  <S.Text color={color} size={size}>
    {text}
  </S.Text>
);

export default TextCustom;
