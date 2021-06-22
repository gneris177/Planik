import * as S from "../styles/login.styles";
import Image from "next/image";

//components
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Input from "../components/Input";
import Button from "../components/Button";

const Container = () => (
  <S.ContainerMain>
    <Header headerLogin />

    <S.ContainerBody>
      <S.ContainerImg>
        <Image
          src="/img/a10e909a-3d37-42a6-ad64-962e567f5a14.jpeg"
          alt="Imgmarca da Planik"
          width={530}
          height={575}
        />
      </S.ContainerImg>

      <S.LoginArea>
        <Paragraph
          title="Meu Portal Planik."
          text="Um espaço pensado exclusivo para você, Cliente!"
        />
        <Input placeholder="Login" type="text" />
        <br />
        <Input placeholder="Senha" type="password" />
        <S.ForgetPassowrd href="./">Esqueci minha senha</S.ForgetPassowrd>
        <br />
        <S.ContainerBtn>
          <a href="./portal-do-cliente">
            <Button text="Login" />
          </a>
        </S.ContainerBtn>
      </S.LoginArea>
    </S.ContainerBody>
  </S.ContainerMain>
);

export default Container;
