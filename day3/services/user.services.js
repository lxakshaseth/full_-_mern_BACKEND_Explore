const User = require("../models/user.models");

// CREATE
const createUser = async (userData) => {
  const user = await User.create(userData);

  return user;
};

// GET ALL
const getUsers = async () => {
  const users = await User.find();

  return users;
};

// GET BY ID
const getUserById = async (id) => {
  const user = await User.findById(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// UPDATE
const updateUser = async (id, userData) => {
  const user = await User.findByIdAndUpdate(
    id,
    userData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

// DELETE
const deleteUser = async (id) => {
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};