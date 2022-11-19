import React, { useState } from "react";

const Users = function (props) {
  const [signUpInput, setSignUpInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const [signUpInputError, setSignUpInputError] = useState({
    email: '',
    password: '',
    passwordConfirmation: ''
  })

  const handleSignUp = () => {
    props.signUp(signUpInput)
  }

  const handleChange = (name, value) => {
    setSignUpInput({
      ...signUpInput, [name]: value // for all sign up input states, set the name (key) to value
    });
  }

  const validateSignUp = (e) => {
    e.preventDefault();

    let inputError = { // same as signup inputError
      email: '',
      password: '',
      passwordConfirmation: ''
    }

    if (!signUpInput.email) {
      setSignUpInputError({
        ...inputError, email: 'Enter a valid email'
      });
      return;
    }

    if (signUpInput.password !== signUpInput.passwordConfirmation) {
      setSignUpInputError({
        ...inputError, passwordConfirmation: 'Both passwords should match'
      });
      return;
    }

    if (!signUpInput.password) {
      setSignUpInputError({
        ...inputError, password: 'Password should not be empty'
      });
      return;
    }

    if (Object.values(signUpInputError).every(input => input === '')) {
      handleSignUp()
    }

    setSignUpInputError(inputError)
  }

  
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={validateSignUp}>
        <label>First Name</label>
        <input
          name="firstName"
          value={signUpInput.firstName} 
          onChange={({target}) => {handleChange(target.name, target.value)}}
        />
        
        <label>Last Name</label>
        <input
          name="lastName" 
          value={signUpInput.lastName} 
          onChange={({target}) => handleChange(target.name, target.value)}
        />

        <label>Email</label>
        <input
          name="email" 
          type="email" 
          value={signUpInput.email} 
          onChange={({target}) => handleChange(target.name, target.value)}
        />
        <p className="error-message">{signUpInputError.email}</p>

         
        <label>Password</label>
        <input
          name="password" 
          type="password" 
          value={signUpInput.password} 
          onChange={({target}) => handleChange(target.name, target.value)}
        />
        <p className="error-message">{signUpInputError.password}</p>

        <label>Password Confirmation</label>
        <input
          name="passwordConfirmation" 
          type="password" 
          value={signUpInput.passwordConfirmation} 
          onChange={({target}) => handleChange(target.name, target.value)}
        />
        <p className="error-message">{signUpInputError.passwordConfirmation}</p>

        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default Users;