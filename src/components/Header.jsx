/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import * as S from '../styles/Header';

export default function Header({ title, searchActive }) {
  const history = useHistory();
  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={ () => history.push('/profile') }
            sx={ { mr: 2 } }
          >
            <ManageAccountsIcon />
          </IconButton>
          <Typography
            variant="h6"
            align="center"
            noWrap
            component="div"
            sx={ { flexGrow: 1 } }
          >
            {title}
          </Typography>
          {searchActive
      && (
        <S.Search>
          <S.SearchIconWrapper>
            <SearchIcon />
          </S.SearchIconWrapper>
          <S.StyledInputBase
            placeholder="Search…"
            inputProps={ { 'aria-label': 'search' } }
          />
        </S.Search>
      )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  searchActive: propTypes.bool.isRequired,
};
