import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './Footer.css'; 

const Footer = () => {
    return (
        <Box component="footer" className="glass-footer">
            <Container maxWidth="sm">
                <Typography variant="body1" textAlign={'center'}>
                    © 2024 App Store. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
