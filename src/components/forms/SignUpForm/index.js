import React, {useReducer} from 'react';
import reducer from './reducer';

const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    email:'',
    password:'',
  });
  const handlerInput = ({target:{name, value}})=>{
    const action = {name, value};
    dispatch(action);
  }
  return (
    <div>
      <h2>Sign up</h2>
      <form>
        <input type='email' name='email' value={state.email} onChange={handlerInput}/>
        <input type='password' name='password' value={state.password} onChange={handlerInput}/>
      </form>
    </div>
  );
}

export default SignUpForm;
