import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";

export default function Home() {
  return (
   <>
      <Header /> 
      <Card titulo="Bem-vindo à Home"/>
      <Footer/>
   </>
  );
}
