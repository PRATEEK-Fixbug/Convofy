import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import './ChatRoom.css';

const socket = io('http://localhost:5000');

const ChatRoom = () => {
    const { chatId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        socket.emit('joinRoom', chatId);

        socket.on('message', (message) => {
            setMessages((prev) => [...prev, message]);
        });

        socket.on('updateOnlineUsers', (users) => {
            setOnlineUsers(users);
        });

        return () => {
            socket.emit('leaveRoom', chatId);
            socket.off();
        };
    }, [chatId]);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            socket.emit('sendMessage', { chatId, content: newMessage });
            setNewMessage('');
        }
    };

    return (
        <div className="chatroom-container">
            <div className="chatroom-header">Chat Room</div>
            <div className="online-users">
                {onlineUsers.map((user) => (
                    <span key={user.id}>{user.username}</span>
                ))}
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <b>{msg.sender.username}: </b>
                        {msg.content}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message"
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default ChatRoom;
