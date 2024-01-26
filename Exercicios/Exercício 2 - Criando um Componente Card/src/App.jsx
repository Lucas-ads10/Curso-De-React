import Card from "./components/Card"
import starWarsPosterImg from "./assets/starWars.jpg"
import empirePosterImg from "./assets/empire.jpg"
import returnPosterImg from "./assets/return.jpg"

function App(){
    return(
        <>
            <Card title="Pôstar: Star Wars (1977)" posterImg={starWarsPosterImg} />
            <Card title="Pôster: Empire Stikes Back (1980)" posterImg={empirePosterImg}/>
            <Card title="Pôster: Return of the Jedi (1983)" posterImg={returnPosterImg}/>
        </>
    )
}

export default App
