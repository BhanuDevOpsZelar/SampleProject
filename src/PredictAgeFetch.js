import React from 'react'
import  Axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const PredictAgeFetch = () => {

    const [name, setName]= useState("");

    const [predictAge, setPredictAge] = useState([]);

   const predictAgeClick=()=>{
        Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
        setPredictAge(res.data.age)
    })
    }
    useEffect(()=>{
        predictAgeClick()
    })
  return (
    <div>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} />
      <button onClick={predictAgeClick}>Predict Age</button>
      <h2> Predicted Age: {predictAge} </h2>
      <h2>{name} </h2>
      
    </div>
  )
}

export default PredictAgeFetch
