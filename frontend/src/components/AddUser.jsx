import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users'; // đổi nếu backend khác

export default function AddUser({ onUserAdded }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Name không được để trống");
    if (!/\S+@\S+\.\S+/.test(email)) return alert("Email không hợp lệ");

    try {
      await axios.post(API_URL, { name, email });
      setName('');
      setEmail('');
      if (onUserAdded) onUserAdded(); // gọi lại fetchUsers ở App.js
    } catch (err) {
      console.error('Lỗi khi thêm user:', err);
      alert('Thêm user thất bại!');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Thêm</button>
    </form>
  );
}
