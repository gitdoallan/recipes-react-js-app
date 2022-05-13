import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import IconButton from '@mui/material/IconButton';

export default function Footer() {
  return (
    <Box sx={ { flexGrow: 1 } }>
      <AppBar position="static" bottom="0" color="secondary">
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
