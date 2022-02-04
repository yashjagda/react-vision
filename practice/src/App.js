import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar.component";
import Landing from "./components/landing.component";
import Login from "./components/login.component";
import Register from "./components/register.component";

function App() {
  return (
    <div className="App">
     <Navbar />
     <Router>
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="login" element={<Login />}/>
          <Route path="register" element={<Register />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
