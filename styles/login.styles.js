import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 80%;
  margin: 0 auto;
`;

export const ContainerBody = styled.section`
  margin: 0;
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContainerImg= styled.figure`
  margin: -0.1rem 0 0 ;
  z-index: -1;
  text-align: center;
`;

export const LoginArea = styled.div`
  padding: 8rem 5rem;
  @media (max-width: 900px) {
    padding: 0;
    margin: 0 auto;
  }
`;

export const ForgetPassowrd = styled.a`
  float: right;
  margin-top: 0.3rem;
  font-size: 0.5em;
  color: #bcbcff;
  text-decoration: underline;
`;

export const ContainerBtn = styled.div`
  margin: 0.5em;
  text-align: center;
`;
