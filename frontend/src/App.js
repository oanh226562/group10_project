// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import './App.css';

const API_URL = 'http://192.168.1.5:5000/api/users';
 // chắc chắn trùng với backend

function App() {
  const [users, setUsers] = useState([]);

  // Lấy danh sách user
  const fetchUsers = () => {
    axios.get(API_URL)
      .then(res => setUsers(res.data))
      .catch(err => console.error('Lỗi khi lấy users:', err));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Du an Group10 - (Frontend React)</h1>

        {/* Thêm user */}
        <AddUser onUserAdded={fetchUsers} />

        {/* Danh sách user */}
        <UserList users={users} />
      </header>
    </div>
  );
}

export default App;