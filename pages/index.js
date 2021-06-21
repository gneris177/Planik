import * as S from "../styles/Container.Styles";
import Header from "../components/Header";
import Text from "../components/Text";
import TitleCustom from "../components/TitleCustom";
import Overview from "../components/Overview";
import OverviewRow from "../components/OverviewRow";
import Sidebar from "../components/Sidebar";

const Container = () => (
  <S.ContainerMain>
    <Sidebar />

    <S.ContainerPortal>
      <Header subTitle="Portal do cliente" name="João Paulo" headerUser />

      <main style={{ padding: "5% 4%" }}>
        <TitleCustom text="Bem-vindo," text02="João Paulo :)" />
        <S.ConatinerOverview>
          <div>
            <Overview
              defaultSize
              title="Posição Financeira"
              textLink="Ver mais detalhes"
              graphic
            />
          </div>

          <div>
            <Overview
              defaultSize
              textLink="Ver comunicados"
              title="Últimos comunicados"
              arrowText={[
                "Lorem ipsum dolor sit met...",
                "Lorem ipsum dolor sit met...",
                "Lorem ipsum dolor sit met...",
                "Lorem ipsum dolor sit met...",
              ]}
            />
          </div>

          <div>
            <Overview
              title="Meu imóvel"
              textLink="Ver mais detalhes"
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
          </div>

          <S.Aa>
            <OverviewRow
              title="Andamento da obra"
              textLink="Ver mais detalhes"
            />
          </S.Aa>
        </S.ConatinerOverview>
      </main>
    </S.ContainerPortal>
  </S.ContainerMain>
);

export default Container;
