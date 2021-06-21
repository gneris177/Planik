import * as S from "../styles/login.styles";
import Image from "next/image";

import Header from "../components/Header";
import Text from "../components/Text";
import Input from "../components/Input";

const Container = () => (
  <S.ContainerMain>
    <Header headerLogin />
    <S.ContainerBody>
      <figure style={{margin: 0}}>
        <Image
          src="/img/a10e909a-3d37-42a6-ad64-962e567f5a14.jpeg"
          alt="Logomarca da Planik"
          width={570}
          height={525}
        />
      </figure>

      <S.LoginArea>
        <Text subTitle text="Meu Portal Planik." />
        <Text text="Um espaço pensado exclusivo para você, Cliente!" />
        <Input placeholder="Login" type="text" /> <br />
        <Input placeholder="Senha" type="pss" />
      </S.LoginArea>
    </S.ContainerBody>
  </S.ContainerMain>
);

export default Container;
