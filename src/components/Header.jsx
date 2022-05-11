/* eslint-disable react/jsx-max-depth */
import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import * as S from '../styles/Header';

export default function HeaderMUI() {
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
            <ManageAccountsIcon />
          </IconButton>
          <Typography
            variant="h6"
            align="center"
            noWrap
            component="div"
            sx={ { flexGrow: 1, display: { xs: 'none', sm: 'block' } } }
          >
            Foods
          </Typography>
          <S.Search>
            <S.SearchIconWrapper>
              <SearchIcon />
            </S.SearchIconWrapper>
            <S.StyledInputBase
              placeholder="Search…"
              data-testid="search-top-btn"
              inputProps={ { 'aria-label': 'search' } }
            />
          </S.Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
