import React from 'react';

const UserList = ({ users, handleEdit, handleDelete }) => (
  <table border="1" width="100%" style={{ borderCollapse: 'collapse' }}>
    <thead>
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>Email</th>
        <th>Hành động</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={user._id}>
          <td>{index + 1}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button onClick={() => handleEdit(user)}>Sửa</button>
            <button onClick={() => handleDelete(user._id)} style={{ marginLeft: '5px' }}>Xóa</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserList;
