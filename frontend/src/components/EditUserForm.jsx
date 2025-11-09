import React, { useState, useEffect } from 'react';

const EditUserForm = ({ user, handleUpdate, handleCancel }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleUpdate({ ...user, name, email });
  };

  if (!user) return null;

  return (
    <form onSubmit={onSubmit} style={{ marginTop: '20px' }}>
      <h3>Chỉnh sửa User</h3>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Tên" style={{ marginRight: '10px' }} />
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={{ marginRight: '10px' }} />
      <button type="submit">Cập nhật</button>
      <button type="button" onClick={handleCancel} style={{ marginLeft: '5px' }}>Hủy</button>
    </form>
  );
};

export default EditUserForm;
