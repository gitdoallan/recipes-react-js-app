/* eslint-disable react/jsx-max-depth */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import EmailValidator from 'email-validator';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import { PASSWORD_MINSIZE } from '../helpers/magicNumbers';
import { setLocalStorage } from '../services/localStorage';
import logo from '../images/iRecipesLogoOrange.png';

export default function InputLoginMUI() {
  const history = useHistory();
  const [getEmail, setEmail] = useState('');
  const [getPassword, setPassword] = useState('');
  const [btnStatus, setBtnStatus] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const validateEmail = EmailValidator.validate(getEmail);
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
    setPassword(''); setEmail('');
    history.push('/foods');
  };

  return (
    <Grid container component="main" sx={ { height: '100vh' } }>
      <CssBaseline />
      <Grid
        item
        xs={ false }
        sm={ 4 }
        md={ 7 }
        sx={ {
          backgroundImage: 'url(https://i.imgur.com/dLEgYMO.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light'
            ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } }
      />
      <Grid item xs={ 12 } sm={ 8 } md={ 5 } component={ Paper } elevation={ 6 } square>
        <Box
          sx={ {
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          } }
        >
          <img alt="logo" src={ logo } className="logoImg" />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={ handleSubmit } sx={ { mt: 1 } }>
            <TextField
              value={ getEmail }
              onChange={ ({ target: { value } }) => setEmail(value) }
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={ getPassword }
              onChange={ ({ target: { value } }) => setPassword(value) }
              autoComplete="current-password"
            />
            <FormControlLabel
              control={ <Checkbox value="remember" color="secondary" /> }
              label="Remember Me"
            />
            <Button
              type="submit"
              disabled={ btnStatus }
              color="primary"
              fullWidth
              variant="contained"
              endIcon={ <FingerprintIcon /> }
              sx={ { mt: 3, mb: 2 } }
            >
              Enter
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
