import Title from "../Title"
import styles from "./styles.module.css"
import ProfileSection from "./ProfileSection"
import LinkButton from "../LinkButton"
import { useState } from "react"

export default function Profile(props) {
    //[valor , funcaoModificadora]
    const [followText, setFollowText] = useState("Follow")    

    function handleClick(ev) {
        alert("Você está seguindo!")
        setFollowText("Following")
        console.log({followButtonText})
    }

    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}