/* eslint-disable react/jsx-max-depth */
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../styles/Header';

export default function HeaderMUI({ title, searchActive }) {
  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={ { mr: 2 } }
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={ { display: { xs: 'none', sm: 'block' } } }
          >
            { title }
          </Typography>
          <Box sx={ { flexGrow: 1 } } />
          { searchActive && (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                data-testid="search-top-btn"
                inputProps={ { 'aria-label': 'search' } }
              />
            </Search>
          ) }
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

HeaderMUI.propTypes = {
  title: PropTypes.string.isRequired,
  searchActive: PropTypes.bool.isRequired,
};
