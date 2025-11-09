import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import EditUserForm from './components/EditUserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const API_URL = "http://localhost:5000/api/users";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (user) => setEditingUser(user);
  const handleCancel = () => setEditingUser(null);

  const handleUpdate = async (updatedUser) => {
    try {
      const res = await axios.put(`${API_URL}/${updatedUser._id}`, updatedUser);
      setUsers(users.map(u => u._id === updatedUser._id ? res.data.user : u));
      setEditingUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter(u => u._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Quản lý User</h1>
      <AddUser setUsers={setUsers} API_URL={API_URL} />
      <UserList users={users} handleEdit={handleEdit} handleDelete={handleDelete} />
      <EditUserForm user={editingUser} handleUpdate={handleUpdate} handleCancel={handleCancel} />
    </div>
  );
}

export default App;
