import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #1e1e2f;
            padding: 1rem;
            color: white;
            font-family: 'Arial', sans-serif;
          }

          .navbar a {
            color: white;
            text-decoration: none;
            padding: 0.8rem 1.5rem;
            font-size: 1.2rem;
            transition: background-color 0.3s ease;
            border-radius: 5px;
          }

          .navbar a:hover {
            background-color: #ff9e57;
          }

          .navbar-left {
            display: flex;
            gap: 1rem;
          }

          .navbar-right {
            display: flex;
            gap: 1rem;
          }
        `}
      </style>

      <div className="navbar">
        <div className="navbar-left">
          <Link to="/">Home</Link>
          <Link to="/chat">Chat</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="navbar-right">
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
