import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// var myNameIs = "Bibhuti Jha";
// var myAge = 10;
// var myGirl = "Renu Jha";
// var amIrenu= true
// var amInotRenu = false

// console.log(myAge, myNameIs, myGirl);
// alert(JSON.stringify(amIrenu));
// console.log(amInotRenu);
// console.log(typeof(amIrenu));
// console.log(typeof(amInotRenu));

// var myPhoneNumber = 34567890;
// var myNumber = "Hey its me";

// console.log(myPhoneNumber);
// console.log(myNumber);

// console.log(typeof(myNumber));
// if (isNaN(myNumber)){
//   console.log("plz enter valid number");
//   alert(JSON.stringify(myNumber))
// }
// else{
//   console.log("you r on the right way")
// }







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
