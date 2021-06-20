import * as S from "./Sidebar.Styles";
import Image from "next/image";

//icons
import { DataPie } from "@styled-icons/fluentui-system-filled/DataPie";
import { Home } from "@styled-icons/heroicons-outline/Home";
import { Dollar } from "@styled-icons/boxicons-regular/Dollar";
import { MoneyBillWaveAlt } from "@styled-icons/fa-solid/MoneyBillWaveAlt";
import { Newspaper } from "@styled-icons/ionicons-sharp/Newspaper";
import { Timer } from "@styled-icons/zondicons/Timer";
import { TrendingUp } from "@styled-icons/evaicons-solid/TrendingUp";
import { InfoCircle } from "@styled-icons/boxicons-solid/InfoCircle";
import { Comments } from '@styled-icons/foundation/Comments';
 
import Text from "../Text";

const Sidebar = () => (
  <S.ContainerMain>
    <Image
      src="/img/logo.png"
      alt="Logomarca a Planik"
      width={95}
      height={18}
    />

    <S.ContainerItem>
      <DataPie /> <Text text="Posição Financeira" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
      <Home /> <Text text="2° via do boleto" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
      <Dollar /> <Text text="Extrato Financeiros" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
      <MoneyBillWaveAlt /> <Text text="Fluxo de pagamento" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
      <Newspaper /> <Text text="Informe de rendimento" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
      <Timer /> <Text text="Antecipação de parcelas" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
      <TrendingUp /> <Text text="Andamento da obra" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
      <InfoCircle /> <Text text="FAQ" color="white" />
    </S.ContainerItem>

    <S.ContainerItem>
     <Comments /> <Text text="Comunicados" color="white" />
    </S.ContainerItem>
  </S.ContainerMain>
);

export default Sidebar;
