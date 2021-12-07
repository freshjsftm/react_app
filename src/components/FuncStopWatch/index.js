import React, {useState, useEffect} from 'react';
import {format, addMilliseconds} from 'date-fns';

const FuncStopWatch = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0,0));
  const [isRuning, setIsRunning] = useState(false);
  const btnHandler = ()=>{setIsRunning(!isRuning)}
  const btnReset = ()=>{
    setTime(new Date(0,0,0,0,0,0,0));
    setIsRunning(false)
  }
  useEffect(()=>{
    if(isRuning){
      const idInterval = setInterval(()=>{
        setTime(time=>addMilliseconds(time,1000))
      }, 1000);
      return ()=>{
        console.log('clear')
        clearInterval(idInterval);
      }
    }
  }, [isRuning])

  return (
    <div>
      <h2>Stop Watch</h2>
      <p>Time: {format(time, 'HH:mm:ss')} </p>
      <button onClick={btnHandler}>{isRuning?'Stop':'Start'}</button>
      <button onClick={btnReset}>Reset</button>
    </div>
  );
}

export default FuncStopWatch;
