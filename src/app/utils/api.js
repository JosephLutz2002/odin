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

  function addAssignment(name,desc,date,moduleid,weighting){
    return new Promise((resolve, reject) => {
      const apiUrl = url+ '/api/modules/addAssignment';
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        data: {
          name:name,
          desc:desc,
          date:date,
          id:cookies.getJWTToken('uid'),
          module:moduleid,
          weighting:weighting
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

  function getAssignments(moduleid){
    return new Promise((resolve, reject) => {
      const apiUrl = url+ `/api/modules/getAssignments?user_id=${cookies.getJWTToken('uid')}&module_id=${moduleid}`;
      console.log(apiUrl)
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      };
  
      axios(apiUrl)
      .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          resolve(false);
        });
    });
  }

  function getTests(moduleid){
    return new Promise((resolve, reject) => {
      const apiUrl = url+ `/api/modules/getTests?user_id=${cookies.getJWTToken('uid')}&module_id=${moduleid}`;
      console.log(apiUrl)
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      };
  
      axios(apiUrl)
      .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          resolve(false);
        });
    });
  }


  function addTest(name,date,moduleid,weighting){
    return new Promise((resolve, reject) => {
      const apiUrl = url+ '/api/modules/addTest';
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        data: {
          name:name,
          date:date,
          userid:cookies.getJWTToken('uid'),
          moduleid:moduleid,
          weighting:weighting
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

  function getMark(moduleid){
    return new Promise((resolve, reject) => {
      const apiUrl = url+ `/api/modules/average?user_id=${cookies.getJWTToken('uid')}&module_id=${moduleid}`;
      console.log(apiUrl)
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
      };
  
      axios(apiUrl)
      .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          resolve(false);
        });
    });
  }

module.exports = {
    login,createAccount,createModule,getAllModules,deleteModule,addAssignment,getAssignments,getTests,addTest,getMark
};
  