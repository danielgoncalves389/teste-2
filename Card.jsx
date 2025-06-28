import styles from "./Card.modules.css"

export default function Card(props){
    return(
        <> 
        <div className="container">
            <h1>{props.titulo}!</h1>
        </div>
        </>
    )

}