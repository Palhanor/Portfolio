// TODO: Criar campo de contato
// TODO: Permitir baixar o curriculo
// TODO: Adicionar suporte para o Medium e E-mail

// import Image from "next/image";
// import { Inter } from "next/font/google";
import Banner from "../components/Banner";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Posts from "../components/Posts";
import Footer from "../components/Footer";
import History from "../components/History";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <History />
      <Projects />
      {/* <Contact /> */}
      <Posts />
      <Footer />
    </>
  );
}
