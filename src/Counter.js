import { useState } from "react"; 

function Counter(props){
    const {delda} = props
    const [count, setCount] = useState(1)

   

    function incr(){
        setCount(
            function(oldCount){
               return oldCount + delda; 
            }
        )
    }
   function reset(){
        setCount(0)
   }
  
   

    return (
      <div className="App">
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick={incr}>Click to add {delda} to Counter</button>
        <button onClick={reset}>Reset Counter</button>
      </div>
    );
    }

  
  
  export default Counter;