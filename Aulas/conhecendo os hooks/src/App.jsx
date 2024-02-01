import './App.css'
import useCounter from './assets/hooks/useCounter'

// Regra 1: Onde usar os hooks => só pode ser usado dentro de um função ou em um hook customizado
// Regra 2: Ordem dos hooks =>  você só pode chamar um hook no top-level da função, nunca deverá chamar os hooks dentro de blocos condicionais, repetições ou outros funções criadas dentro do componente.

function App() {
  const counter = useCounter()
  
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={counter.increment}>
          count is {counter.count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
