import { Schema, model } from "mongoose";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const cocktailSchema = new Schema({}, { versionKey: false, timestamps: true });

cocktailSchema.pre("findByIdAndUpdate", handleUpdateValidate);

cocktailSchema.post("save", handleSaveError);

cocktailSchema.post("findByIdAndUpdate", handleSaveError);

const Cocktail = model("cocktail", cocktailSchema);

export default Cocktail;
