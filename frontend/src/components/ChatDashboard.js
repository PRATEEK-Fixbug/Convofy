import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ChatDashboard.css';

const ChatDashboard = () => {
    const [chats, setChats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchChats = async () => {
            const userId = localStorage.getItem('userId');
            const { data } = await axios.get(`http://localhost:5000/api/chat/user/${userId}`);
            setChats(data);
        };
        fetchChats();
    }, []);

    const openChat = (chatId) => {
        navigate(`/chat/${chatId}`);
    };

    return (
        <div className="dashboard-container">
            <h1>Your Chats</h1>
            <div className="chat-list">
                {chats.map((chat) => (
                    <div key={chat._id} className="chat-item" onClick={() => openChat(chat._id)}>
                        <b>{chat.isGroupMessage ? 'Group' : 'Private'} Chat</b>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatDashboard;
