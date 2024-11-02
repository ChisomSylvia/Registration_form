import Joi from "joi";
import { LEVEL } from "../utils/user.util.js";

//create user schema
const createUserSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().trim().email().lowercase().required(),
  phoneNumber: Joi.string()
    .pattern(new RegExp(/^(?:\+?234|0)?[789]\d{9}$/))
    .optional(),
  level: Joi.string().valid(...Object.values(LEVEL)).required(),
  description: Joi.string().trim().required(),
});

//update user schema
const updateUserSchema = Joi.object({
  name: Joi.string().trim().optional(),
  email: Joi.string().trim().email().lowercase().optional(),
  phoneNumber: Joi.string()
    .pattern(new RegExp(/^(?:\+?234|0)?[789]\d{9}$/))
    .optional(),
  level: Joi.string().valid(...Object.values(LEVEL)).optional(),
  description: Joi.string().trim().optional(),
});

export { createUserSchema, updateUserSchema };