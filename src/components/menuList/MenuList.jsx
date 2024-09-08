import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
 

const MenuList = () => {
  const categories = [
    { icon: <HomeIcon />, label: 'Home' },
    { icon: <AppsIcon />, label: 'Categories' },
    { icon: <TrendingUpIcon />, label: 'Top Charts' },
    { icon: <FavoriteIcon />, label: 'Wishlist' },
    { icon: <SettingsIcon />, label: 'Settings' },
    { icon: <HelpIcon />, label: 'Help & Support' },
  ];

  return (
    <div className="glassmorphism-container">
      <List>
        {categories.map((category, index) => (
          <ListItem button key={index} className="glass-item">
            <ListItemIcon className="icon">{category.icon}</ListItemIcon>
            <ListItemText primary={category.label} className="text" />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MenuList;
