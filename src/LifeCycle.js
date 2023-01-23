import React, { useState } from 'react'
import { useEffect } from 'react';

const LifeCycle = () => {

    const [text, setText]= useState("");

    useEffect(()=>{
      console.log("comp mounted")
      return() =>{
        console.log("comp Unstaged")
      }
    },[text])
    
    
  return (
    <div>
      
      <div><input type="text" onChange={(e)=>{setText(e.target.value)}}/> </div>
      <div>{text} </div>
    </div>
  )
}

export default LifeCycle
