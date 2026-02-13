import React from "react";
import About from "@/components/AppScreen/About";
// import History from "@/components/AppScreen/History";
import Banner from "@/components/AppScreen/Banner";
import Footer from "@/components/AppScreen/Footer";
import Header from "@/components/AppScreen/Header";
import Posts from "@/components/AppScreen/Posts";
import Projects from "@/components/AppScreen/Projects";
import Contact from "@/components/AppScreen/Contact";

export default function AppScreen() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      {/* <History /> */}
      <Projects />
      <Posts />
      <Contact />
      <Footer />
    </>
  );
}
