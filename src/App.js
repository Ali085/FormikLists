import './App.css';
import {Formik, Field, Form } from "formik"
import React,{ useState } from 'react';

function App() {
  const [List, setList] = useState([])
  return (
    <div className='MyForm'>
      <Formik initialValues={{
        username:"",
        password:"",
        email:"",
        about:"",
        phoneNumber:"",
      }}
      onSubmit={(values)=>{
        setList((prevState) => [...prevState,values])
      }}
      >
        {(props)=>(

          <Form>
            Username
            <Field name="username" />
            Password
            <Field name="password" type="password"/>
            Email
            <Field name="email" />
            About
            <Field name="about" />
            Phone Number
            <Field name="phoneNumber" />
            <button type='submit'>Sign in</button>
          </Form>
        )}
      </Formik>
          {
            <ol>
              {
                List.map((e,i) => {
                  return (
                    <li key={i}>
                      <p>{e.username}</p>
                      <p>{e.password}</p>
                      <p>{e.email}</p>
                      <p>{e.about}</p>
                      <p>{e.phoneNumber}</p>
                    </li>
                  )
                })
              }
            </ol>
          }
    </div>
    )
}

export default App;
