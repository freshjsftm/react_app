import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import cx from 'classnames';
import styles from './SignInForm.module.scss';
import {SIGN_IN_SCHEMA} from '../../utils/schemasValidation';

const initialValues = {
  email:'',
  password:''
}

const SignInForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log('values:', values)
    //console.log('formikBag:', formikBag)
  }
  return (
    <Formik initialValues={initialValues} 
    onSubmit={onSubmit}
    validationSchema={SIGN_IN_SCHEMA}>{
        (formikProps) =>{
          //console.log(formikProps)
          return(
            <Form>
                <Field name='email'/>
                <Field name='password'/>
                <button type="submit">Sign in</button>
            </Form>
          )
        }
    }</Formik>
  );
}

export default SignInForm;
