import React from 'react';
import { useState } from "react";
import Result from './Result.js'
import "./app.css"
export default function App() {
  const [num1,setnum1]=useState('');
const [num2,setnum2]=useState('');
const [operators,setoperators]=useState();
const [result,setresult]=useState('');


const handlechangenum1=(event)=>{
  setnum1(parseInt(event.target.value))
}
const handlechangenum2=(event)=>{
  setnum2(parseInt(event.target.value))
}
const handlechangeoperator=(event)=>{
  setoperators(event.target.value)
}
  return (
    <div className="App">
      <h3>First Input : <input  placeholder="Number 1..." type="number" value={num1} onChange={handlechangenum1}/></h3>
      <h3>Second Input : <input  placeholder="Number 2..." type="number" value={num2} onChange={handlechangenum2}/></h3>
      <h3> operators :
        <select value={operators} onChange={handlechangeoperator}>
         <option value=''></option>
          <option value='add'>ADD</option>
          <option value='sub'>SUB</option>
          <option value='mul'>MUL</option>
          <option value='div'>DIV</option>
        </select>
      </h3>
 
        <Result  no1={num1} no2={num2} op={operators} re={result} setre={setresult}/>
    </div>
  );
}
