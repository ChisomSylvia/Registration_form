import mongoose from "mongoose";
import { LEVEL } from "../utils/user.util.js"

const userSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true,
    unique: false,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  phoneNumber: {
    type: String,
    required: false,
    trim: true,
    unique: true,
  },

  level: {
    type: String,
    required: true,
    enum: LEVEL,
    default: null,
  },

  description: {
    type: String,
    required: true,
    trim: true
  }

}, {
  versionKey: false,
  timestamps: true
}
);

const UserModel = new mongoose.model("User", userSchema);
export default UserModel;