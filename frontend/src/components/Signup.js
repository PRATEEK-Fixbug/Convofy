import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, email, password });
            alert('Account created successfully! You can now log in.');
            navigate('/login');
        } catch (err) {
            alert('Signup failed. Please try again!');
        }
    };

    return (
        <div className="signup-container">
            <h1>Create Your Convofy Account</h1>
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Sign Up</button>
                <p>
                    Already have an account? <a href="/login">Log in here</a>
                </p>
            </form>
        </div>
    );
};

export default Signup;
