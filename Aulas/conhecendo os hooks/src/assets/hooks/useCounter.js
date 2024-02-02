import { useState } from 'react'

function getInitialValue(){
    console.log("obtendo um valor inicial")
    return 1 + 1
}

export default function useCounter(){
    const [count, setCount] = useState(() => getInitialValue()) //Não está chamando a função e sim a definbição dela

    const increment = () => {
        setCount ((batata) => batata + 1) //usar as funções incluindo os dois valores
        setCount ((batata) => batata + 1)
    }

    return { count, increment}
}