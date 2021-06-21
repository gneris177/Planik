import styled from "styled-components";

export const ContainerMain = styled.main`
  display: flex;
  background-color: #f8f8f8;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContainerPortal = styled.section`
  width: 83%;
  margin: 0 auto;
`;

export const ConatinerOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 36ch;
  padding: 5%;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
  }
`;

export const Aa = styled.div`
  width: 95%;
  grid-column: 1 / 3;
`;
