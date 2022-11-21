import React, { useState } from "react";

const Users = (props) => {
  return (
    <div>
      <SignUp signUp={props.signUp} />
      <SignIn signIn={props.signIn} />
    </div>
  );
};
export default Users;

const SignUp = (props) => {
  const [signUpInput, setSignUpInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [signUpInputError, setSignUpInputError] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSignUp = () => {
    props.signUp(signUpInput);
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

        <button className="boton">Sign Up</button>
      </form>
    </div>
  );
};

const SignIn = (props) => {
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

  const handleSignIn = (e) => {
    e.preventDefault();
    props.signIn(signInInput);
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
          {props.error ? <p className="error-message">{props.error}</p> : null}
        </div>
        <button className="boton">Sign In</button>
      </form>
    </div>
  );
};
