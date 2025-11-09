import React, { useState } from 'react';
import axios from 'axios';

const AddUser = ({ setUsers, API_URL }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = async () => {
    if (!name || !email) return alert("Vui lòng nhập đầy đủ thông tin");
    try {
      const res = await axios.post(API_URL, { name, email });
      setUsers(prev => [...prev, res.data.user]);
      setName('');
      setEmail('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input placeholder="Tên" value={name} onChange={e => setName(e.target.value)} style={{ marginRight: '10px' }} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ marginRight: '10px' }} />
      <button onClick={handleAdd}>Thêm</button>
    </div>
  );
};

export default AddUser;
