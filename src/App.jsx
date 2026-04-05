
import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'

function App() {

  // const [val,setVal]=useState("Vishal");
  const [val1,setVal1]=useState("");
  const [val2,setVal2]=useState("");
  const [val3,setVal3]=useState("");

  return (
    <>
      {/* <Counter /> */}

      {/* <h1>Enter the input</h1>
      <input type='text' value={val} 
              onChange={(event)=>{setVal(event.target.value)}}
      ></input>
      <p>{val}</p>

      <button onClick={()=>setVal("")}>Clear </button> */}

      <input type="text" value={val1}
            onChange={(event)=>{setVal1(event.target.value)}}></input>
      <input type="text" value={val2}
            onChange={(event)=>{setVal2(event.target.value)}}></input>
      <input type="text" value={val3}
            onChange={(event)=>{setVal3(event.target.value)}}></input>

      <button onClick={()=>console.log(val1+val2+val3)}>Show Values</button>

    </>
  )
}

export default App
