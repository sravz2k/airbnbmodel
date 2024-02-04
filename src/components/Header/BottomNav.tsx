import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className='bottom-nav' style={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
        <BottomNavigationAction label="WishList" icon={<FavoriteBorderIcon />} />
        <BottomNavigationAction label="Login" icon={<AccountCircleOutlinedIcon />} />
      </BottomNavigation>
    </div>
  );
}