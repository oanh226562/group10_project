import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddUser from './components/AddUser';

const API_URL = 'http://localhost:5000/api/users'; // đổi nếu backend khác

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
    } catch (err) {
      console.error('Lỗi khi lấy danh sách user:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
      <h2>Quản lý User</h2>
      <AddUser onUserAdded={fetchUsers} />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>STT</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Tên</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u._id || i}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{i + 1}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{u.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{u.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
