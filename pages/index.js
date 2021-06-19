import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Text from "../components/Text";
import BtnNotify from "../components/BtnNotify";
import BtnConfig from "../components/BtnConfig";
import Profile from "../components/Profile";

 const Home = () => (
   <div>
     <Profile name='Joao'/>
  <BtnNotify /> <BtnConfig />
    <Header />
  </div>
)

export default Home