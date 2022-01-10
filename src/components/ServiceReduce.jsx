import React from 'react'
import { useState } from 'react'



function Service({title, sendValue , calculate}) {

    const [inputvalue, setInputValue] = useState(0)
    const getValue=(e)=>{
        e.preventDefault()
        sendValue(inputvalue)
        setInputValue("")
        calculate()
    }

    return (
        <div style={{display: 'flex', flexDirection : 'column', gap : '1rem', width:'50%' }}>
      <h4>{title}</h4>
      <form onSubmit={getValue} style={{display: 'flex', flexDirection : 'column', gap : '1rem', width:'100%' }}>
      <input type="text" placeholder="Montant" onChange={(e)=>{setInputValue(e.target.value)}} />
      <button type="submit">Recharger</button>
      </form>
        </div>
    )
}

export default Service;
