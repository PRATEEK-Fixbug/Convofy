import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <style>
        {`
          .home-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f1f1f1;
            font-family: 'Arial', sans-serif;
            color: #333;
          }

          .home-heading {
            font-size: 3rem;
            font-weight: bold;
            color: #1e1e2f;
            margin-bottom: 2rem;
          }

          .home-description {
            font-size: 1.2rem;
            color: #555;
            margin-bottom: 3rem;
            text-align: center;
            width: 70%;
          }

          .home-buttons {
            display: flex;
            gap: 1rem;
          }

          .home-button {
            background-color: #ff9e57;
            color: white;
            padding: 1rem 2rem;
            font-size: 1.2rem;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }

          .home-button:hover {
            background-color: #ff7a2b;
          }

          .home-button:focus {
            outline: none;
          }
        `}
      </style>

      <div className="home-container">
        <h1 className="home-heading">Welcome to Convofy</h1>
        <p className="home-description">
          Convofy is a real-time chat application where you can send messages instantly, create group chats, and have one-on-one conversations with your friends. Join us today and start chatting!
        </p>
        <div className="home-buttons">
          <Link to="/login" className="home-button">Login</Link>
          <Link to="/signup" className="home-button">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
