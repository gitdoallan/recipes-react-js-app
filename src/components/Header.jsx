/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Divider } from '@mui/material';
import SearchSection from './SearchSection';

export default function HeaderMUI({ title, searchActive }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();

  return (
    <>
      <Drawer
        anchor="left"
        open={ drawerOpen }
        onClose={ () => setDrawerOpen(false) }
      >
        <Box
          sx={ { width: 250 } }
          role="presentation"
        >
          <List>
            <ListItem disablePadding onClick={ () => history.push('done-recipes') }>
              <ListItemButton>
                <ListItemIcon>
                  <CheckCircleOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Done Recipes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding onClick={ () => history.push('favorite-recipes') }>
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteIcon />
                </ListItemIcon>
                <ListItemText primary="Favorite Recipes" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
      <Box sx={ { flexGrow: 1 } }>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={ { mr: 2 } }
              onClick={ () => setDrawerOpen(true) }
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
            { searchActive && <SearchSection /> }
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
    </>
  );
}

HeaderMUI.propTypes = {
  title: PropTypes.string.isRequired,
  searchActive: PropTypes.bool.isRequired,
};
