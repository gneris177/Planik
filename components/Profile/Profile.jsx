import * as S from "./Profile.Styles";
import NamePerfil from "../Text";

const Perfil = ({ name }) => (
  <S.ContainerMain>
    <NamePerfil text={name} />
    <S.PhotoPerfil
      src="/img/profile.jpg"
      alt="Picture of the author"
      width={30}
      height={10}
    />
    <S.Icon />
  </S.ContainerMain>
);

export default Perfil;
