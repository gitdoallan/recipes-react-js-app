import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EmailValidator from 'email-validator';
import Button from '@mui/material/Button';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { setLocalStorage, getLocalStorage } from '../services/localStorage';

export default function InputLogin() {
  const history = useHistory();
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
    setLocalStorage('user', { email: getEmail });
    setLocalStorage('mealsToken', 1); setLocalStorage('cocktailsToken', 1);
    console.log(getLocalStorage('user'));
    setPassword(''); setEmail('');
    history.push('/foods');
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
        <Button
          disabled={ btnStatus }
          type="submit"
          data-testid="login-submit-btn"
          variant="contained"
          endIcon={ <FingerprintIcon /> }
        >
          Enter
        </Button>
      </form>

    </div>
  );
}
