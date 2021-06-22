import styled from "styled-components";

export const ContainerMain = styled.main`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  background-color: #f8f8f8;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContainerPortal = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ConatinerOverview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 34ch;
  padding: 0 5%;
  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
`;

export const ContainerRow = styled.div`
  width: 95%;
  grid-column: 1 / 3;
  @media (max-width: 1200px) {
    width: 90%;
    margin: 0 auto;
  }
`;

export const ConatinerOverviewTitle = styled.div`
  margin: 3% 0 0 5%;
`;
