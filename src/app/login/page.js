'use client'
import React, { useState, useEffect } from 'react';
import '../globals.css';
import { useRouter } from 'next/navigation';

function Login() {
  // const variables for username and password - implement use state to handle states and changes 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleLogin = async () => {
   console.log('handling account login')
  };
  

  return (
    <div className='loginScreen'>
     <div>
       <div className="pageStyle">
      <div className="inputbox">
        <label className='label'>Username</label>
        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div className="inputbox">
        <label className='label'>Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required></input>
        </div>

      <div><button  className="button glow-on-hover" onClick={handleLogin}>Login</button></div>
    </div>
    </div>
    </div>
  );
}

export default Login;