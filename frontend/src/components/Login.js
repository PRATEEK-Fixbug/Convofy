import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        } catch (err) {
            alert('Login failed. Please try again!');
        }
    };

    return (
        <div className="login-container">
            <h1>Welcome to Convofy</h1>
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
                <p>
                    Don't have an account? <a href="/signup">Sign up here</a>
                </p>
            </form>
        </div>
    );
};

export default Login;
