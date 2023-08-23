import { Schema, model } from "mongoose";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const ingredientSchema = new Schema(
  {},
  { versionKey: false, timestamps: true }
);

ingredientSchema.pre("findByIdAndUpdate", handleUpdateValidate);

ingredientSchema.post("save", handleSaveError);

ingredientSchema.post("findByIdAndUpdate", handleSaveError);

const Ingredient = model("ingredient", ingredientSchema);

export default Ingredient;
