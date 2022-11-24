import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services";

const SignUp = ({ onLoggedIn }) => {
  const [signUpError, setSignUpError] = useState();
  const [signUpInput, setSignUpInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });
  const navigate = useNavigate();

  const [signUpInputError, setSignUpInputError] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const onSignedIn = (user) => {
    onLoggedIn(user);
    navigate("/about-you");
  };

  const onError = (error) => {
    setSignUpError(error);
  };

  const handleSignUp = () => {
    signUp({ user: signUpInput, onSignedIn, onError });
  };

  const _handleChange = (name, value) => {
    setSignUpInput({
      ...signUpInput,
      [name]: value, // for all sign up input states, set the name (key) to value
    });
  };

  const validateSignUp = (e) => {
    e.preventDefault();

    let inputError = {
      // same as signup inputError
      email: "",
      password: "",
      passwordConfirmation: "",
    };

    if (!signUpInput.email) {
      setSignUpInputError({
        ...inputError,
        email: "Enter a valid email",
      });
      return;
    }

    if (signUpInput.password !== signUpInput.passwordConfirmation) {
      setSignUpInputError({
        ...inputError,
        passwordConfirmation: "Both passwords should match",
      });
      return;
    }

    if (!signUpInput.password) {
      setSignUpInputError({
        ...inputError,
        password: "Password should not be empty",
      });
      return;
    }

    if (Object.values(signUpInputError).every((input) => input === "")) {
      handleSignUp();
    }

    setSignUpInputError(inputError);
  };

  return (
    <div className="col-md-10 mx-auto col-lg-5 rounded-5 usersForm">
      <h2 className="mb-3 mt-3">Sign Up</h2>
      <form onSubmit={validateSignUp}>
        <div className="input-container">
          <input
            name="firstName"
            value={signUpInput.firstName}
            onChange={({ target }) => {
              _handleChange(target.name, target.value);
            }}
            className="form-control mb-3"
          />
          <label className={signUpInput.firstName && "filled"}>
            First Name
          </label>
        </div>

        <div className="input-container">
          <input
            name="lastName"
            value={signUpInput.lastName}
            onChange={({ target }) => _handleChange(target.name, target.value)}
            className="form-control mb-3"
          />
          <label className={signUpInput.lastName && "filled"}>Last Name</label>
        </div>

        <div className="input-container">
          <input
            name="email"
            type="email"
            value={signUpInput.email}
            onChange={({ target }) => _handleChange(target.name, target.value)}
            className="form-control mb-3"
          />
          <label className={signUpInput.email && "filled"}>Email</label>
        </div>

        <p className="error-message">{signUpInputError.email}</p>

        <div className="input-container">
          <input
            name="password"
            type="password"
            value={signUpInput.password}
            onChange={({ target }) => _handleChange(target.name, target.value)}
            className="form-control mb-3"
          />
          <label className={signUpInput.password && "filled"}>Password</label>
        </div>

        <p className="error-message">{signUpInputError.password}</p>

        <div className="input-container">
          <input
            name="passwordConfirmation"
            type="password"
            value={signUpInput.passwordConfirmation}
            onChange={({ target }) => _handleChange(target.name, target.value)}
            className="form-control mb-3"
          />
          <label className={signUpInput.passwordConfirmation && "filled"}>
            Password Confirmation
          </label>
        </div>

        <p className="error-message">{signUpInputError.passwordConfirmation}</p>
        {signUpError ? <p className="error-message">{signUpError}</p> : null}

        <button className="boton">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
