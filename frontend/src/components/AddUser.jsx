import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ setUsers, API_URL }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault(); // Ngăn form submit mặc định

    // Validation
    if (!name.trim()) {
      alert("Name không được để trống");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Email không hợp lệ");
      return;
    }

    try {
      const res = await axios.post(API_URL, { name, email });
      setUsers(prev => [...prev, res.data.user]); // Cập nhật state
      setName('');
      setEmail('');
    } catch (err) {
      console.error(err);
      alert("Lỗi khi thêm user");
    }
  };

  return (
    <form onSubmit={handleAdd} style={{ marginBottom: '20px' }}>
      <input
        placeholder="Tên"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Thêm</button>
    </form>
  );
};

export default AddUser;
