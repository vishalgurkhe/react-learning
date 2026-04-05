import React from "react";
import { useState } from "react";

function Counter() {
  //let count=10;
  const [count, changeCount] = useState(0);
  
  const [isOn,setIsOn]=useState(false);

  return (
    <div>
      <h1>Counter Application</h1>
      <p>Count :{count}</p>
      <button
        onClick={() => {
          changeCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          if (count > 0) {
            changeCount(count - 1);
          }
          if(count==0){
            alert("You reached zero, you cannot decrease");
          }
        }}
      >
        Decrement
      </button>

      <hr>
      </hr>

        <button onClick={()=>setIsOn(!isOn)}>
          {!isOn?"On":"off"}
        </button>

        <p>{isOn}</p>

       {isOn?
      <h1>State is On</h1> :
      <h1>State is Off</h1>
      } 

    </div>
  );
}

export default Counter;
