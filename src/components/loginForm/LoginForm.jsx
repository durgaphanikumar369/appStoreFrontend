import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('All fields are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        try {
            await axios.post('http://localhost:5000/api/auth/login', { email, password });
            alert('Login successful!');
            navigate('/dashboard'); 
        } catch (error) {
            console.error('Error during login:', error);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <Container maxWidth="sm" className="login-container">
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            {error && <Alert severity="error" className="error-message">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Login
                </Button>
            </form>
            <Typography variant="body2" className="centered-message">
                Don't have an account? <Link to="/signup">Sign up here</Link>
            </Typography>
        </Container>
    );
};

export default LoginForm;
