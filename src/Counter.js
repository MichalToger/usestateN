import { useState } from "react"; 

function Counter(){
    const [count, setCount] = useState(1)
    const [delda, setDelta] = useState(1)

    function incr(){
        setCount(
            function(oldCount){
               return oldCount + 1; 
            }
        )
        console.log(count)
    }
    return (
      <div className="App">
        <h1>Counter</h1>
        <input type= "number" value= {delda}/>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add 1 to Counter</button>
        <button onClick={reset}>Reset Counter</button>
      </div>
    );
  }
  
  export default Counter;