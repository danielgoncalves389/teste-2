import Link from "next/link";
import styles from "./Header.modules.css"


export default function Header(){
    return(
        <>

        <div className="header-container">
            <div className="logo">
                <h1>MeuSite</h1>
            </div>

            <nav className="menu">
                <Link  className="rotas"  href="/">Home</Link>
                <Link  className="rotas"  href="/pages/galeria">Galeria</Link>
                <Link  className="rotas"  href="/pages/contato">Contato</Link>
            </nav>
        </div>
        </>
    )
}