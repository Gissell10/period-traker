import React, { useState } from "react";
import { signIn } from "../services";
import { useNavigate } from "react-router-dom";

const SignIn = ({ onLoggedIn }) => {
  const navigate = useNavigate();
  const [signInError, setSignInError] = useState();
  const [signInInput, setSignInInput] = useState({
    email: "",
    password: "",
  });

  const _handleChange = (e) => {
    const inputTarget = e.target.value;
    const inputName = e.target.name;
    setSignInInput({
      ...signInInput,
      [inputName]: inputTarget,
    });
  };

  const onSignedIn = (user) => {
    onLoggedIn(user);
    navigate("/calendar");
  };

  const onError = (error) => {
    setSignInError(error);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    signIn({ user: signInInput, onSignedIn, onError });
  };

  return (
    <div className="col-md-10 mx-auto col-lg-5 rounded-5 mt-5 usersForm">
      <h2 className="mb-3 mt-3">Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="input-container">
          <input
            name="email"
            type="email"
            value={signInInput.email}
            onChange={_handleChange}
            className="form-control mb-3"
          />
          <label className={signInInput.email && "filled"}>Email</label>
        </div>
        <div className="input-container">
          <input
            name="password"
            type="password"
            value={signInInput.password}
            onChange={_handleChange}
            className="form-control mb-3"
          />
          <label className={signInInput.password && "filled"}>Password</label>
          {signInError ? <p className="error-message">{signInError}</p> : null}
        </div>
        <button className="boton">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
