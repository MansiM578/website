import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Client from "../components/Client";
import Experts from "../components/Experts";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";
export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Experts />
      <Aboutus />
      <Client />
      <Hero />

      <Footer />
    </>
  );
}
