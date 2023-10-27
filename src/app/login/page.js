'use client'
import React, { useState, useEffect } from 'react';
import '../globals.css';
import { useRouter } from 'next/navigation';
const api = require('../utils/api')
const cookies = require('../utils/cookies')

function Login() {
  // const variables for username and password - implement use state to handle states and changes 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
   if (await api.login(username,password)){
    console.log('User access token\t',cookies.getJWTToken('access'))
    console.log('refresh token\t',cookies.getJWTToken('refresh'))
    router.push('/dashboard')
   }else {
    alert('Login Unsuccessful')
   }
  };


  const handleCreateAccount = async() => {
    console.log('handling create account');
    router.push('/createAccount')
  }

  
  

  return (
    <div className='loginScreen'>
     <div>
       <div className="pageStyle">
      <div className="inputbox">
        <label className='label'>Username</label>
        <input type="text" id="username"  placeholder='username' onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="inputbox">
        <label className='label'>Password</label>
            <input type="password" id="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} required></input>
        </div>

      <div><button  className="button glow-on-hover" onClick={handleLogin}>Login</button></div>
      <div><button  className="button glow-on-hover" onClick={handleCreateAccount}>Create Account</button></div>
    </div>
    </div>
    </div>
  );
}

export default Login;