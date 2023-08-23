import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="body-login">
      <p>Login to access the full dashboard</p>
      <label htmlFor="fname">Email:</label>
      <input type="email" id="email" />
      <label htmlFor="lname">Password:</label>
      <input type="password" id="password" />
      <button>OK</button>
    </div>
  );
}

export default Login;
