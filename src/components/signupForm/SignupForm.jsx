import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography, Alert } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError('All fields are required.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        try {
            await axios.post('http://localhost:5000/api/auth/signup', { username, email, password });
            alert('Signup successful! Please log in.');
            navigate('/login');
        } catch (error) {
            console.error('Error during signup:', error);
            setError('Signup failed. Please try again.');
        }
    };

    return (
        <Container maxWidth="sm" className="signup-container">
            <Typography variant="h4" component="h1" gutterBottom>
                Sign Up
            </Typography>
            {error && <Alert severity="error" className="error-message">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    fullWidth
                    margin="normal"
                />
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
                    Sign Up
                </Button>
            </form>
            <Typography variant="body2" className="centered-message">
                Already have an account? <Link to="/login">Log in here</Link>
            </Typography>
        </Container>
    );
};

export default SignupForm;
