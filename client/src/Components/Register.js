import React, { useState } from 'react';
import '../App.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

function Register() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const history = useHistory();

  Axios.defaults.withCredentials = true;

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
    history.push('/login');
  };

  return (
    <div className="registration">
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
      />

      <button onClick={register}>Register</button>
    </div>
  );
}
export default Register;
