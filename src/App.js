import './App.css';
import React, {useState} from 'react';
import LearnHooks from './components/LearnHooks';


function App(){
  const [isVisible, setIsVisible] = useState(true);
  const handlerBtn = ()=>{
    setIsVisible(!isVisible);
  }
  return(
    <>
    <button onClick={handlerBtn}>switch</button>
    {isVisible && <LearnHooks />}
    </>
  );
}


export default App;

