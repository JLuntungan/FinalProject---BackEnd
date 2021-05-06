import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/atom/Button";
import Input from "../../components/atom/input";



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const dataLogin = {
      email: email,
      password: password,
    };
    console.log(dataLogin);
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>
      <Input
        className="form-control"
        label="Email"
        placeholder="Masukkan Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        className="form-control"
        label="Password"
        placeholder="Masukkan password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Link to="/Dashboard">
      <Button onSubmit={handleSubmit} text="Submit" />
      </Link>
    </div>
  );
};

export default Login;
