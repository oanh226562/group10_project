// src/components/UserList.jsx
import React from 'react';

export default function UserList({ users }) {
  return (
    <div>
      <h3>Danh Sách Users</h3>
      {users.length === 0 ? (
        <p>Chưa có user nào...</p>
      ) : (
        <table style={{ width: '100%', maxWidth: '600px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id || user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
