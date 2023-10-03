
import React from 'react';
import"./app.css";

const Result=({no1,no2,op,re,setre})=> {

const handler=((event)=>{
    if (op!=="" && no1!=="" && no2!==""){
 if (op==="add"){
setre(no1+no2)
 }
 else if ( op==="sub"){
    setre(no1-no2)
 }
 else if (op==="mul"){
    setre(no1*no2)
 }
 else if (op==="div"){
    setre(no1/no2)
 }
}
}
)
  return (
    <div>
            <button onClick={handler}>Result</button>
            <input value={re}  />
    </div>
  )
}

export default Result;