const express = require('express');
const Message = require('../models/Message');
const User = require('../models/User');
const router = express.Router();

// Fetch all messages between two users or in a group
router.get('/:chatId', async (req, res) => {
    try {
        const messages = await Message.find({ chatId: req.params.chatId })
            .populate('sender', 'username profilePicture')
            .populate('receiver', 'username profilePicture');
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching messages' });
    }
});

// Send a message
router.post('/send', async (req, res) => {
    const { senderId, receiverId, content, isGroupMessage } = req.body;

    try {
        const newMessage = new Message({
            sender: senderId,
            receiver: receiverId,
            content,
            isGroupMessage,
        });
        const savedMessage = await newMessage.save();
        res.status(201).json(savedMessage);
    } catch (err) {
        res.status(500).json({ error: 'Error sending message' });
    }
});

// Get user's chats (groups and private chats)
router.get('/user/:userId', async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [{ sender: req.params.userId }, { receiver: req.params.userId }],
        })
            .populate('sender', 'username profilePicture')
            .populate('receiver', 'username profilePicture');
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching user chats' });
    }
});

module.exports = router;
