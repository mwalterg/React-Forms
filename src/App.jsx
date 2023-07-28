import React from "react";
import Authenticate from "./components/authenticate";
import SignUpForm from "./components/signupform";
import { useState } from "react";
import './App.css';


export default function App() {
  const [token, setToken] = useState(null);
 
  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
    </>
  );

  }