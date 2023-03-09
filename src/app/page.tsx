// import Image from "next/image";
// import { Inter } from "next/font/google";
// import styles from "./page.module.css";
import Banner from "../components/Banner";
import About from "../components/About";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Posts />
      <Footer />
    </>
  );
}
