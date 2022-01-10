import React from 'react'
import { useState } from 'react'
import {useReducer} from 'react'



function Service({title, result, value, Montant}) {

    

    return (
        <div style={{display: 'flex', flexDirection : 'column', gap : '1rem', width:'50%' }}>
      <h4>{title}</h4>
      <form onSubmit={result} style={{display: 'flex', flexDirection : 'column', gap : '1rem', width:'100%' }}>
      <input type="text" placeholder="Montant" onChange={value} value={Montant} />
      <button type="submit">Recharger</button>
      </form>
        </div>
    )
}

export default Service
