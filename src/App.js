import React from 'react';
import './App.css';
import {useFormik} from 'formik'

function App() {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values =>{
      console.log('form:', values);
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field Required';
      if(!values.password) errors.password = 'Field Required';
      if(!values.email) {
        errors.email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email address';
      }
      
      return errors;
  
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" name="email"onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? ( <div id = "emailError" style={{color: 'red'}}>{formik.errors.email} </div>) : null}
        <div>Password</div>
        <input id="pswField" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? (<div id="pswError" style={{color: 'red'}}>{formik.errors.password} </div>) : null}
        <div>
        <button id="submitBtn" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
