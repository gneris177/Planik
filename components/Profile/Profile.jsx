import * as S from "./Profile.Styles";
import Image from 'next/image'

import NamePerfil from "../Text";

const Perfil = ({ name }) => (
  <S.ContainerMain>
    <NamePerfil text={name} />
    <S.Icon />
    <Image
      src="/img/profile.png"
      alt="Foto de perfil do usuário"
      width={35}
      height={0}
    />
  </S.ContainerMain>
);

export default Perfil;
