import React, {useReducer} from 'react';

const reducer = (state, action) => {
  const {name, value} = action;
  const newState = {
    ...state,
    [name]:value
  }
  return newState;
}

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
