import React from 'react'
import './App.css'
import { useState } from 'react'
import {useReducer} from 'react'

import ServiceReduce from './components/ServiceReduce'







function AppReduce() {

    const initialState ={ solde:100}
    const [value, setValue] = useState(0)
  
  const reducer =(state, action)=>{
    switch (action.type){ 
      case'rechargeCompt':
     return {solde:state.solde +parseInt(value)};
    case 'virement':
     return {solde:state.solde +parseInt(value)};
    case 'rechargeTel':
     return {solde:state.solde - parseInt(value)};
    default:
     throw new Error();
    }  
  }
   const [state, dispatch] = useReducer(reducer, initialState)
  
     const demande=(value)=>{
      setValue(value)
     }
    return (
        <div className="App">

            <h1>Bienvenue dans l'espace clent de votre banque</h1>
      <h4 style={{textAlign : 'right', marginRight :'5rem'}}>Votre solde est : {state.solde}$</h4>
      <h3 style={{textDecoration: 'underline'}}>Nos Services</h3>
      <div style={{display: 'flex', flexDirection : 'row', width:'70%', marginLeft : '12rem', justifyItems: 'center', gap : '5rem'}}>
      
      <ServiceReduce title="Recharger votre compte" sendValue={demande} calculate={()=>dispatch({type:"rechargeCompt"})} />
      <ServiceReduce title="Virement" sendValue={demande} calculate={()=>dispatch({type:"virement"})}/>
      <ServiceReduce title="Recharger telephone" sendValue={demande} calculate={()=>dispatch({type:"rechargeTel"})}/>
      </div>

        </div>
    )
}

export default AppReduce;
