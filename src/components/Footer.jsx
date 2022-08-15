import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import ExploreIcon from '@mui/icons-material/Explore';
import RestaurantIcon from '@mui/icons-material/Restaurant';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const stickToBottom = {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  };

  return (
    <Box>
      <BottomNavigation
        style={ stickToBottom }
        showLabels
        value={ value }
        onChange={ (event, newValue) => {
          setValue(newValue);
        } }
      >
        <BottomNavigationAction
          label="Foods"
          icon={ <RestaurantIcon /> }
          onClick={ () => history.push('/foods') }
        />
        <BottomNavigationAction
          label="Drinks"
          icon={ <LocalBarIcon /> }
          onClick={ () => history.push('/drinks') }
        />
        <BottomNavigationAction
          label="Explore"
          icon={ <ExploreIcon /> }
          onClick={ () => history.push('/explore') }
        />
      </BottomNavigation>
    </Box>
  );
}
