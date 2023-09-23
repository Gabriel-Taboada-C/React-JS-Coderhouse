import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";

//Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAb_QlwTJYv86bPtwIKWaemsTx0feE1_dk",
  authDomain: "coder-proyect-r.firebaseapp.com",
  projectId: "coder-proyect-r",
  storageBucket: "coder-proyect-r.appspot.com",
  messagingSenderId: "958799519029",
  appId: "1:958799519029:web:8b35ce0f43f515ea2a807c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
