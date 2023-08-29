import { Schema, model } from "mongoose";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const cocktailSchema = new Schema(
  {
    drink: { type: String, required: [true, "Set name for a drink"] },
    description: String,
    drinkAlternate: String,
    tags: [String],
    video: String,
    category: { type: String, required: [true, "Set a category for a drink"] },
    IBA: String,
    alcoholic: {
      type: String,
    },
    glass: { type: String, required: [true, "Glass type required"] },
    instructions: {
      type: Schema.Types.Mixed,
      required: [true, "Instructions are required"],
    },
    instructionsES: String,
    instructionsDE: String,
    instructionsFR: String,
    instructionsIT: String,
    instructionsRU: String,
    instructionsPL: String,
    instructionsUK: String,
    drinkThumb: String,
    ingredients: [
      {
        title: String,
        measure: String,
        ingredientThumb: String,
        thumbMedium: String,
        thumbSmall: String,
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    users: [String],
  },
  { versionKey: false, timestamps: true }
);

cocktailSchema.pre("findByIdAndUpdate", handleUpdateValidate);

cocktailSchema.post("save", handleSaveError);

cocktailSchema.post("findByIdAndUpdate", handleSaveError);

const Cocktail = model("cocktail", cocktailSchema);

export default Cocktail;
