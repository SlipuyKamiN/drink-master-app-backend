import { Schema, model } from "mongoose";
import { emailRegexp } from "../constants/user-constants.js";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: emailRegexp,
      unique: true,
    },
    token: String,
    avatarURL: String,
    
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findByIdAndUpdate", handleUpdateValidate);

userSchema.post("save", handleSaveError);

userSchema.post("findByIdAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
