// server/controllers/userController.js
// Tạm thời dùng mảng in-memory để test (sẽ chuyển sang MongoDB ở Activity 5)
let users = [
  { id: 1, name: "Nguyen Thi Yen Oanh", email: "ynoah18@gmail.com" },
  { id: 2, name: "Nguyen Ngoc Tham", email: "ttnguyen22@gmail.com" }
];

exports.getUsers = (req, res) => {
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const id = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
};
