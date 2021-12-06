import React, {useState, useEffect} from 'react';

const LearnHooks = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(10);
  const handlerStep = ({target:{value}}) =>{ setStep(Number(value))}

  useEffect(()=>{  
    const handlerClick = () =>{
      setCount(count=>count+step);
    } 
    document.body.addEventListener('click', handlerClick);
    console.log('add effect')
    return ()=>{
      document.body.removeEventListener('click', handlerClick);
      console.log('remove effect')
    }
  }, [step])
  
  return (
    <div>
      <h1> count:{count}</h1>
      <input type='number' value={step} onChange={handlerStep}/>
    </div>
  );
}

export default LearnHooks;
