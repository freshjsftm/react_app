import React, {useState, useEffect} from 'react';
const useClicker = (value) => {
  const [count, setCount] = useState(value);//состояние - счетчик
  useEffect(()=>{  //эффект - клик на окне
    const handlerClick = ()=>{setCount(count=>count+1)}
    window.addEventListener('click', handlerClick);
    return ()=>{window.removeEventListener('click', handlerClick);}
  },[])
  return count;
}
export default useClicker;

