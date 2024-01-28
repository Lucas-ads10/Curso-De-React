import Card from "./components/Card"
import lucasImg from "./assets/Lucas.jpg"
import Button from "./components/Button"

function App(){
  return(
    <>
      <Card name="Lucas Silva" posterImg={lucasImg} 
        legends="full-stack javascript developer at Acme Inc"
        number="75988039825"
        email="lucasdssilva13@hotmail.com" 
        text="Github"
      />
    </>
    
  )
}
export default App
