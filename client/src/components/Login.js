import React,{useState} from "react";
import {useHistory} from 'react-router-dom';

import axios from 'axios'

import {Form,Button} from 'semantic-ui-react';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials,setCredentials] = useState({
    username: "",
    password: ""
  })

  const {push} = useHistory();


  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      }
    );
  };

  const handleSubmit = (ev) =>{
    ev.preventDefault();
     // make a post request to login endpoint on the server
      axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        // console.log(res);
        localStorage.setItem("token", res.data.payload);
        // push user to app's main loggin page
        push("/protected");
      })
      .catch(err => console.error(err));
  }

  return (
    <div>
      <header className='top-nav'>
          <h1>Welcome to the Bubble App!</h1>
        </header>
      
      <Form onSubmit={handleSubmit}>
        <Form.Field>
        <label>Username:
          <input
            type='text'
            name='username'
            onChange={handleChange}
            value={credentials.username}
          />
        </label>
        </Form.Field>

        <Form.Field>
        <label>Password:
          <input
            type='password'
            name='password'
            onChange={handleChange}
            value={credentials.password}
          />
        </label>
        </Form.Field>

        <br />
        <Button type='submit' color='blue'>Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
