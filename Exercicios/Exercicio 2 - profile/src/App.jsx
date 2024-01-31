import Card from "./components/Card"
import lucasImg from "./assets/Lucas.jpg"

function App(){
  return(
    <div className="app">
      <Card name="Lucas Silva" 
        posterImg={lucasImg} 
        legends="full-stack javascript developer at Acme Inc"
        number="75988039825"
        email="lucasdssilva13@hotmail.com" 
        githubUrl="https://github.com/Lucas-ads10"
        linkedinUrl="https://www.linkedin.com/in/lucas-silva-32797719b/"
      />
    </div>
  )
}
export default App
