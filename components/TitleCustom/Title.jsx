import * as S from "./Title.Styles";

const Title = ({ text, text02 }) => (
  <S.Title>
    <S.ColorP>{text}</S.ColorP> 
    <S.ColorS>{' '+text02}</S.ColorS>
  </S.Title>
);

export default Title;
