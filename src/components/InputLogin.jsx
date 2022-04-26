import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function InputLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const getEmail = useSelector(({ receitasReducer }) => (receitasReducer));
  console.log(getEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', payload: { email, password } });
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
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="password-input"
          />
        </label>
        <button data-testid="login-submit-btn" type="submit">Enter</button>
      </form>

    </div>
  );
}
