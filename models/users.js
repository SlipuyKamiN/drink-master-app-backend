import { Schema, model } from "mongoose";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const userSchema = new Schema({}, { versionKey: false, timestamps: true });

userSchema.pre("findByIdAndUpdate", handleUpdateValidate);

userSchema.post("save", handleSaveError);

userSchema.post("findByIdAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
