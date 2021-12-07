import './App.css';
import React, {useState} from 'react';
import FuncStopWatch from './components/FuncStopWatch';


function App(){
  const [isVisible, setIsVisible] = useState(true);
  const handlerBtn = ()=>{
    setIsVisible(!isVisible);
  }
  return(
    <>
    <button onClick={handlerBtn}>switch</button>
    {isVisible && <FuncStopWatch />}
    </>
  );
}


export default App;

