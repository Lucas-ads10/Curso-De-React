import Button from "../Button"
import styles from "./styles.module.css"

export default function Card({name, posterImg, legends, number, email, text }){
    return(
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="name"></img>
                <h2>{name}</h2>
                <p>{legends}</p>
                <hr />
                <p>{number}</p>
                <hr />
                <p>{email}</p>
                <hr />
            <br />
            
            <br />
            
        </div>
    )
}