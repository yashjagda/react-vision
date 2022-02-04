import React from 'react'
import { useState, useEffect } from "react";
import "./css/Main.css"
import axios from "axios";

function Login() {
    const [username, onChangeUsername] = useState("");
    const [password, onChangePassword] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();
        console.log(username,password);
        const credentials = {
            username : username,
            password : password
        }
        try {
           const response = await axios.post("http://localhost:5000/api/auth/login", credentials); 
           console.log(response)
        } catch (error) {
            alert("Incorrect Username or Password!")
        }
    }
    return (
        <div className="container wrapper">
        <div>
          <div className="card card-container">
            <img
              id="profile-img"
              className="profile-img-card"
              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={onSubmit}>
              <span></span>
              <input
                type="name"
                className="form-control"
                placeholder="UserName"
                value={username}
                onChange={(e)=> onChangeUsername(e.target.value)}
                autoFocus
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e)=> onChangePassword(e.target.value)}
              />

              <button
                className="btn btn-lg btn-primary btn-block btn-signin"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}

export default Login;
