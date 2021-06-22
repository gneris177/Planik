import * as S from "./Paragraph.Styles";

const Paragraph = ({ text, color, title }) => (
  <S.Text color={color} >
    <S.Title>{title}</S.Title>
    {text}
  </S.Text>
);

export default Paragraph;
