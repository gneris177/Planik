import * as S from "./Header.Styles";
import Text from "../Text";
import BtnNotify from "../BtnNotify";
import BtnConfig from "../BtnConfig";
import Profile from "../Profile";

const Header = ({ subTitle }) => (
  <S.ContainerMain>
    <div>
      <Text text={subTitle} subTitle />
    </div>
    <S.ContainerSecundary>
      <S.ContainerBtn>
        <BtnConfig />
        <BtnNotify />
      </S.ContainerBtn>
      <Profile name="João Paulo" />
    </S.ContainerSecundary>
  </S.ContainerMain>
);

export default Header;
