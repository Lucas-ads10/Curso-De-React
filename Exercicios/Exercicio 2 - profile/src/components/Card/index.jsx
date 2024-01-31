import LinkButton from "../LinkButton/index."
import CardSection from "./CardSection"
import Title from "./Title"
import styles from "./styles.module.css"

export default function Card(props){
    return(
        <div className={styles.container}>
            <img className={styles.poster} src={props.posterImg} alt={props.name}></img>
            <Title>
                <span>{props.name}</span>
            </Title>
            <CardSection>{props.legends}</CardSection>
            <CardSection>{props.number}</CardSection>
            <CardSection>{props.email}</CardSection>
            <CardSection
                className={styles.links}
            >
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
            </CardSection>
        </div>
    )
}