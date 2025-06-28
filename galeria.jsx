import Image from "next/image"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import styles from "./galeria.modules.css"
import Card from "@/components/Card/Card"

export default function Galeria(){
    return(
        <>
            <Header/>

            <Card titulo="Fotos da Galeria" />

            <div className="imagem-container">
                <Image
                src="/globe.svg"
                alt="nome"
                width="100"
                height="100"
                className={styles.Imagem}
                />
            </div> 

            <Footer/>
        </>
    )
}