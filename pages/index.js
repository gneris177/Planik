import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Text from "../components/Text";
import BtnNotify from "../components/BtnNotify";
import BtnConfig from "../components/BtnConfig";

 const Home = () => (
   <div>
  <Text text='ok'/>
  <BtnNotify /> <BtnConfig />
    <Header />
  </div>
)

export default Home