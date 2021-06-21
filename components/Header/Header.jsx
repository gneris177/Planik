import * as S from "./Header.Styles";
import Image from "next/image";

import Text from "../Text";
import BtnNotifications from "../BtnNotifications";
import BtnSettings from "../BtnSettings";
import Profile from "../Profile";

const Header = ({ headerLogin, headerUser, subTitle, name }) => (
  <S.ContainerMain headerLogin>
    {headerUser && (
      <>
        <div>
          <Text text={subTitle} subTitle />
        </div>
        <S.ContainerSecundary>
          <S.ContainerBtn>
            <BtnSettings />
            <BtnNotifications />
          </S.ContainerBtn>
          <Profile name={name} />
        </S.ContainerSecundary>
      </>
    )}

    {headerLogin && (
      <>
        <Image
          src="/img/logo02.jpg"
          alt="Logomarca da Planik"
          width={120}
          height={35}
        />
        <S.ContainerMenu>
          <S.IconMenu />
          <Text text="MENU" color="white" subTitle />
        </S.ContainerMenu>
      </>
    )}
  </S.ContainerMain>
);

export default Header;
