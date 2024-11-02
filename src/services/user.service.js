import UserModel from "../models/user.model.js";

//fxn to create a new user
export const createUser = async(data) => {
  return await UserModel.create(data);
};

//fxn to retrieve one user detail
export const findUser = async(query) => {
  return await UserModel.findOne(query);
};

//fxn to retrieve all users details
export const findUsers = async(query) => {
  return await UserModel.find(query);
};

//fxn to update a user info
export const updateUser = async(query, data) => {
  return await UserModel.findOneAndUpdate(query, data, { new: true });
};

//fxn to hard delete a user
export const delUser = async(query) => {
  return await UserModel.findOneAndDelete(query);
};

// //fxn to soft delete a user
// export const softDelUser = async(id) => {
//   return await UserModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
// };