import './App.css';
import React, {Component} from 'react';
import SignInForm from './components/SignInForm';
import { SIGN_UP_SCHEMA } from './utils/schemasValidation';

function App(){
  const userData = {
    fname: '', 
    sname:'Musk',
    email:'elon@gmail.com',
    password:'gr3at@3wdsG',
    age: 50,
  };

  console.log(SIGN_UP_SCHEMA.validate(userData)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})
  );
  return(
    <>
    <SignInForm />
    </>
  );
}


export default App;

