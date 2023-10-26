'use client'
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

/**
 * function addToken will store a token with the given value
 * @param {*} name 
 * @param {*} token 
 */
function addToken(name,token){
	var decoded = jwt_decode(token)
	Cookies.set(name, token, { expires: 10})
}

/**
 * function addRefreshToken will add a refresh token with the given value
 * @param {*} name 
 * @param {*} token 
 */
function addRefreshToken(name,token){
	Cookies.set(name, token, { expires: 1})
    console.log('refresh token addedd');
}

/**
 * function getJWTToken will get the token value for the given name
 * @param {} name 
 * @returns 
 */
function getJWTToken(name){
	return Cookies.get(name)
}

/**
 * function isTokenExpired will check if the access token is expired
 * @returns boolean true or false
 */
function isTokenExpired() {
	var access = Cookies.get('access');
	if (access != undefined) {
	var decoded = jwt_decode(access);
	let now = Date.now();
	let date = new Date(now);
	let seconds = date.getUTCSeconds();
	let timeDiff = decoded.exp - seconds
	if (timeDiff < 0) {
		return true 
	} else {
		return false
	}
	}
}


function isCookieExpired(name) {
  const tokens=document.cookie.split(';');
    for (const token of tokens) {
        const [tokenName, tokenValue] = token.trim().split('=');
        if (tokenName === name) {
          console.log(tokenName,'\t',tokenValue.split(';'));
          return true;
        }
      }
      return null;  
}


/**
 * function clearData will clear all the user tokena and storage values
 */
function clearData() {
	Cookies.remove('uid');	
	Cookies.remove('email');	
	Cookies.remove('username');	
	Cookies.remove('access');
	Cookies.remove('refresh');
}

/**
 * function checkLogged will see if the user is currently loged in
 * @returns 
 */
function checkLogged() {
	if (Cookies.get('refresh') == undefined) {
		return false;
	} else {
		return true;
	}
}


/**
 * function store data will store all user data in the form of cookies 
 * @param {*} username 
 * @param {*} email 
 * @param {*} uid 
 * @param {*} n 
 * @param {*} e 
 * @param {*} id 
 */
function storeData(username,email,uid,n,e,id){
	Cookies.set(n, username, { expires: 1})
	Cookies.set(e, email, { expires: 1})
	Cookies.set(id, uid, { expires: 1})
	console.log('username stored');
	console.log('email stored');
	console.log('userid stored stored');

}

module.exports = {addToken,
	addRefreshToken,
	getJWTToken,
	storeData,
	isCookieExpired,
	isTokenExpired,
	checkLogged,
	clearData,
}