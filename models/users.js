import { Schema, model } from "mongoose";
import { emailRegexp} from "../constants/user-constants.js";
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
      match: emailRegexp,
      unique: true,
      required: [true, "Email is required"],
    },
    token: String,
    avatarURL: String,
    subscription: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("findByIdAndUpdate", handleUpdateValidate);

userSchema.post("save", handleSaveError);

userSchema.post("findByIdAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
