import { useState } from 'react'
import './App.css'
import Service from './components/Service'

function App() {

  const [solde, setSolde] = useState(100)
  const [input1 , setInput1] = useState(0)
  const [input2 , setInput2] = useState(0)
  const [input3 , setInput3] = useState(0)


const value1 = (e) => {
  setInput1(e.target.value)
}

const value2 = (e) => {
  setInput2(e.target.value)
}

const value3 = (e) => {
  setInput3(e.target.value)
}

const result = (e) => {
  e.preventDefault()

  setSolde((parseInt(solde) + parseInt(input1) + parseInt(input2)) - parseInt(input3))
  
  setInput1(0)
  setInput2(0)
  setInput3(0)

}



  return (
    <div className="App">

      <h1>Bienvenue dans l'espace clent de votre banque</h1>
      <h4 style={{textAlign : 'right', marginRight :'5rem'}}>Votre solde est : {solde}$</h4>
      <h3 style={{textDecoration: 'underline'}}>Nos Services</h3>
      <div style={{display: 'flex', flexDirection : 'row', width:'70%', marginLeft : '12rem', justifyItems: 'center', gap : '5rem'}}>
      
      <Service title="Recharger votre compte"  result={result} value={value1} input={input1}/>
      <Service title="Virement" result={result} value={value2} input={input2}/>
      <Service title="Recharger telephone" result={result} value={value3} input={input3}/>
      </div>
    </div>
  )
}

export default App;
