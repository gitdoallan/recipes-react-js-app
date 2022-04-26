import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmailValidator from 'email-validator';

export default function InputLogin() {
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [btnStatus, setBtnStatus] = useState(true);
  const dispatch = useDispatch();
  const { email, password } = useSelector(({ receitasReducer }) => (receitasReducer));
  console.log(email, password);

  useEffect(() => {
    const validateEmail = EmailValidator.validate(getEmail);
    const PASSWORD_MINSIZE = 6;
    const validatePassWord = getPassword.length > PASSWORD_MINSIZE;
    if (validateEmail && validatePassWord) {
      setBtnStatus(false);
    } else {
      setBtnStatus(true);
    }
  }, [getEmail, getPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', payload: { email: getEmail, password: getPassword } });
    setPassword(''); setEmail('');
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={ getEmail }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={ getPassword }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="password-input"
          />
        </label>
        <button
          disabled={ btnStatus }
          data-testid="login-submit-btn"
          type="submit"
        >
          Enter
        </button>
      </form>

    </div>
  );
}
