import styles from "./styles.module.css"
import useRandomPassword from "../hooks/usePassword"
import useButtonName from "../hooks/useCopyPassword";

export default function Button(){
    const [password, generatePassword] = useRandomPassword();

    const [buttonName, setButtonName] = useButtonName('Copiar!!');

    const handleClick = () => {
      setButtonName('Copiado!!');
    };

    return(
        <div>
            <p>{password}</p>
            <button 
                className={styles.wrapper}
                onClick={generatePassword}
            >
                Gerar!!
            </button>
            <button 
                className={styles.wrapper}
                onClick={handleClick}
                >
                    {buttonName}
                </button>
        </div>
    )
}
