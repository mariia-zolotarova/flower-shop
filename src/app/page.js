// import Image from "next/image";
// import styles from "./page.module.css";

import React from "react";
import HomePage from "../pages/Home/HomePage";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <HomePage></HomePage>
        <Footer></Footer>
    </div>
  );
}
