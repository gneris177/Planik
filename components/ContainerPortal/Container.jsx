import * as S from "./Container.Styles";
import Header from "../Header";
import Text from "../Text";
import TitleCustom from "../TitleCustom";
import Overview from "../Overview";
import OverviewRow from "../OverviewRow";
import Sidebar from "../Sidebar";

const Container = () => (
  <S.ContainerMain>
    <Sidebar />

    <S.ContainerPortal>
      <Header subTitle="Portal do cliente" />
      <main style={{padding: '5%'}}>
        <TitleCustom text="Bem-vindo," text02="João Paulo :)" />
        <S.ConatinerOverview>
          <S.Ca>
            <Overview defaultSize title="Posição Financeira" graphic />
          </S.Ca>

          <S.Da>
            <Overview
              defaultSize
              title="Últimos comunicados"
              arrowText={[
                "Lorem ipsum dolor sit met...",
                "Lorem ipsum dolor sit met...",
                "Lorem ipsum dolor sit met...",
                "Lorem ipsum dolor sit met...",
              ]}
            />
          </S.Da>

          <S.Ba>
            <Overview
              title="Meu imóvel"
              textLink=""
              texts={[
                "torre: 1 tores",
                "unidade: 34",
                "andar: 2andar",
                "Quantidate de anadres: 15",
                "Lorem ipsum: xxxx",
                "Lorem ipsum: xxxx",
                "Lorem ipsum: xxxx",
                "Lorem ipsum: xxxx",
              ]}
            />
          </S.Ba>

          <S.Aa>
            <OverviewRow />
          </S.Aa>
        </S.ConatinerOverview>
      </main>
    </S.ContainerPortal>
  </S.ContainerMain>
);

export default Container;
