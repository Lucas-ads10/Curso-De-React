import styles from "./styles.module.css"

export default function Card({name, posterImg, legends, number, email, githubUrl, linkedinUrl  }){
    return(
        <div className={styles.container}>
            <img className={styles.poster} src={posterImg} alt="name"></img>
                <h2>{name}</h2>
                <p>{legends}</p>
                <hr />
                <p>{number}</p>
                <hr />
                <p>{email}</p>
            <div className={styles.links}>
                <a href={githubUrl} target="_blank">GitHub</a>
                <a href={linkedinUrl} target="_blank">Linkedin</a>
            </div>
        </div>
    )
}