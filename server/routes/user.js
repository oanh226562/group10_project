const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User');

// 🟢 Kết nối MongoDB Atlas
mongoose.connect('mongodb+srv://tu226271_db_user:group_10@cluster0.i8xj8rx.mongodb.net/groupDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

// 📥 Lấy danh sách user
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách user', error: err.message });
  }
});

// 📤 Thêm user
router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.json({ message: 'User added successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi khi thêm user', error: err.message });
  }
});

module.exports = router;
