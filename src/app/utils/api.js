'use client'
const axios = require('axios')
const url = 'http://127.0.0.1:5000'
const cookies = require('./cookies')
function login(username,password) {
    console.log('saving new note');
      return new Promise((resolve, reject) => {
        const apiUrl = url+ '/api/account/login';
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          data: {username:username,password:password},
        };
    
        axios(apiUrl, requestOptions)
          .then((response) => {
            console.log(response.data)  
            cookies.addToken('access',response.data['access_token'])
            cookies.addRefreshToken('refresh',response.data['refresh_token'])
            cookies.storeData(username,response.data['email'],response.data['userid'],'username','email','uid')
            resolve(true);
          })
          .catch((error) => {
            resolve(false);
          });
      });
  }

  function createAccount(username,password,email) {
    console.log('saving new note');
      return new Promise((resolve, reject) => {
        const apiUrl = url+ '/api/account/createUser';
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          data: {username:username,password:password,email:email},
        };
    
        axios(apiUrl, requestOptions)
          .then((response) => {  
            console.log(response.data)
            resolve(true);
          })
          .catch((error) => {
            resolve(false);
          });
      });
  }


  function createModule(name,year,code) {
    console.log('saving new note');
      return new Promise((resolve, reject) => {
        const apiUrl = url+ '/api/modules/addModule';
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          data: {module:name,year:year,code:code,userid:cookies.getJWTToken('uid')},
        };
    
        axios(apiUrl, requestOptions)
          .then((response) => {  
            console.log(response.data)
            resolve(response.data);
          })
          .catch((error) => {
            resolve(false);
          });
      });
  }

  function getAllModules(){
    console.log('saving new note');
      return new Promise((resolve, reject) => {
        const apiUrl = url+ '/api/modules/getModules';
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
        };
    
        axios(apiUrl, {params:{id:cookies.getJWTToken('uid')}})
          .then((response) => {  
            resolve(response.data);
          })
          .catch((error) => {
            resolve(false);
          });
      });
  }


  function deleteModule(moduleid){
    return new Promise((resolve, reject) => {
      const apiUrl = url+ '/api/modules/deleteModule';
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        data: {
          userid:cookies.getJWTToken('uid'),
          moduleid: moduleid
        }
      };
  
      axios(apiUrl, requestOptions)
      .then((response) => {  
          resolve(response.data);
        })
        .catch((error) => {
          resolve(false);
        });
    });
  }


module.exports = {
    login,createAccount,createModule,getAllModules,deleteModule
};
  