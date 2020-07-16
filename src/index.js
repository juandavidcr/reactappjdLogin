import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
  if (typeof(Storage) !== "undefined") {
    
      // Code for localStorage/sessionStorage.
      let token = window.localStorage.setItem("token", "0133jdcr-12345678901234567890-2");
      console.log("localstorage Allowed token: " +token);
  } else {
      // Sorry! No Web Storage support..
      alert("localstorage not Allowed");

    }
    function validarCampos(e){
      var userfield=document.getElementById("user").value;
      var passfield=document.getElementById("pass").value;
      if (userfield==""){
        alert("Favor de llenar el campo")
        e.preventDefault();
      }else if(passfield==""){
        alert("Favor de llenar el campo")
        e.preventDefault();
      }
    }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
