import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {
  const [delda, setDelta] = useState(1)
  function handleDelta (e){
    console.log(e);
    setDelta(Number(e.target.value))
  }
  return (
    <div className="App">
      Usestate
      <input type= "number" value= {delda} onChange = {handleDelta}/>
      <Counter delda = {delda}/>
      <Counter delda = {delda}/>
    </div>
  );
}

export default App;
