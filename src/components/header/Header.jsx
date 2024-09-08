import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './Header.css'
import logo from '../../assets/logo.png'


const Header = ({toggleSidebar}) => {
    return (
        <AppBar position="static" className='glass-header' sx={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)' }}>
            <Toolbar>
                
                {/* Logo */}
                <img 
                    src={logo} 
                    alt="App Logo"
                    className='app-logo'
                     
                />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    App Store
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
