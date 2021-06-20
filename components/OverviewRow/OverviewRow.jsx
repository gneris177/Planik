import * as S from "./OverviewRow.Styles";
import ArrowText from "../ArrowText";
import Text from "../Text";

const OverviewRow = ({ title, graphic, arrowText, texts, defaultSize }) => (
  <S.ContainerMain defaultSize={defaultSize}>
    {title}
    <S.Line />
    
    <S.Line />
  </S.ContainerMain>
);

export default OverviewRow;
