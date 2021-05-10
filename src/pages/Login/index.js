import React, { useState } from "react";
import { Link , NavLink} from "react-router-dom";
import Button from "../../components/atom/Button";
import Button2 from "../../components/atom/Button2";
import Input from "../../components/atom/input";
import firebase from "../../config/Firebase";




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
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <Link to="/CRUD">
      <Button onSubmit={handleSubmit} text="Submit" />
      </Link>
      <br></br>
      <Link to="/Registrasi">
      <Button2 onSubmit={handleSubmit} text="Registrasi" />
      </Link>
      
      
      
      
    </div>
  );
};

export default Login;
