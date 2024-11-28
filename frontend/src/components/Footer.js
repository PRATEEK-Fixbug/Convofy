import React from 'react';

const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer {
            background-color: #1e1e2f;
            color: white;
            padding: 1rem;
            text-align: center;
            font-size: 1rem;
            font-family: 'Arial', sans-serif;
          }

          .footer a {
            color: white;
            text-decoration: none;
            margin-left: 0.5rem;
          }

          .footer a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="footer">
        <p>&copy; 2024 Convofy. All Rights Reserved.</p>
        <p>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
