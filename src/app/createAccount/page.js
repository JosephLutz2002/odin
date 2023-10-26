'use client'
//imports for the client side code 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
const api = require('../utils/api')
const RegisterPage = () => {
    // const variables for username and password, email and password validation check - implement use state to handle states and changes 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword,setCheckPassword] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();

  
  const handleAccountCreation = async () => {
    console.log('handling account ceation')
    await api.createAccount(username,password,email)
    router.push('/login')
  }
  return (
    <div>
      <div className="pageStyle">
      <div className="inputbox">
        <label className='label'>Username</label>
        <input type="text" id="username" onChange={(e) => setUsername(e.target.value)} required/>
      </div>
      <div className="inputbox">
        <label className='label'>Password</label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} required></input>
    </div>
    <div className="inputbox">
        <label className='label'>Re-Enter Password</label>
        <input type="password" id="password"  onChange={(e) => setCheckPassword(e.target.value)} required></input>
    </div>
    <div className="inputbox">
        <label className='label'>Email</label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} required></input>
    </div>
    <div>
        <button className='button glow-on-hover' onClick={handleAccountCreation}>Create Account</button>
    </div>    
        </div>
    </div>
  );
};

export default RegisterPage;