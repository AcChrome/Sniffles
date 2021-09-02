const users = [];

const addUser = (id, name, room) => {
  const existingUser = users.find(user => user.name.trim().toLowerCase() === name.trim().toLowerCase())
  
  if (existingUser) return { error: "User exists in another room" }
  if (!name && !room) return { error: "Username and room are required" }
  if (!name) return { error: "Username is required" }
  if (!room) return { error: "Room is required" }
  
  const user = { id, name, room };
  users.push(user);
  console.log('users list after adding user:', users);
  return { user };
}

const getUser = id => {
  let user = users.find(user => user.id === id);
  return user;
}

const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) return users.splice(index, 1)[0];
  console.log('users list after deleting user:', users, "user index:", index);
}

const getUsers = (room) => users.filter(user => user.room === room);

module.exports = { addUser, getUser, deleteUser, getUsers }