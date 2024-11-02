import {
  createUser,
  findUser,
  findUsers,
  updateUser,
  delUser,
} from "../services/user.service.js";

//fxn to create a user
export const createUserCtrl = async (req, res) => {
  const { body } = req;
  body.email = body.email.toLowerCase();

  //check if user already exists
  const existingUser = await findUser({
    $or: [
      { name: body.name },
      { email: body.email }
    ]
  });

  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User already exists",
    });
  }

  //create new user
  try {
    const newUser = await createUser(body);
    return res.status(201).json({
      success: true,
      message: "User created Successfully",
      data: newUser,
    });
  } catch (error) {
    console.error("Error creating user", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//fxn to retrieve one user
export const findUserCtrl = async (req, res) => {
  // const { query } = req;
  const query = { _id: req.params.id }

  try {
    const user = await findUser(query);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User successfully retrieved",
      data: user,
    });
  } catch (error) {
    console.error("Error retrieving user", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//fxn to retrieve all users
export const findUsersCtrl = async (req, res) => {
  const { query } = req;

  try {
    const users = await findUsers(query);
    if (users.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Users not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All users successfully retrieved",
      data: users,
    });
  } catch (error) {
    console.error("Error retrieving users", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//fxn to update a user
export const updateUserCtrl = async (req, res) => {
  const { body } = req;
  const query = { _id: req.params.id };
  // const { id } = req.params;

  const existingUser = await findUser(query);
  if (!existingUser) {
    return res.status(404).json({
      success: false,
      message: "No user found",
    });
  }

  try {
    const updatedUser = await updateUser(query, body);
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

//fxn to delete a user
export const delUserCtrl = async (req, res) => {
  const query = { _id: req.params.id };
  // const { query } = req;

  const existingUser = await findUser(query);
  if (!existingUser) {
    return res.status(404).json({
      success: false,
      message: "No user found",
    });
  }

  try {
    const deletedUser = await delUser(query);
    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch (error) {
    console.error("Error deleting user", error.message);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};