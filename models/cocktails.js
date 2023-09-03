import { Schema, model } from "mongoose";

import { handleSaveError, handleUpdateValidate } from "./hooks.js";

const cocktailSchema = new Schema(
  {
    drink: { type: String, required: [true, "Set name for a drink"] },
    description: String,
    drinkAlternate: String,
    tags: [String],
    video: String,
    category: {
      type: String,
      required: [true, "Set a category for a drink"],
      enum: [
        "Ordinary Drink",
        "Cocktail",
        "Shake",
        "Other",
        "Cocoa",
        "Shot",
        "Coffee / Tea",
        "Homemade Liqueur",
        "Punch / Party Drink",
        "Beer",
        "Soft Drink",
      ],
    },
    IBA: String,
    alcoholic: {
      type: String,
      enum: ["Alcoholic", "Non alcoholic"],
    },
    glass: {
      type: String,
      required: [true, "Glass type required"],
      enum: [
        "Highball glass",
        "Cocktail glass",
        "Old-fashioned glass",
        "Whiskey Glass",
        "Collins glass",
        "Pousse cafe glass",
        "Champagne flute",
        "Whiskey sour glass",
        "Cordial glass",
        "Brandy snifter",
        "White wine glass",
        "Nick and Nora Glass",
        "Hurricane glass",
        "Coffee mug",
        "Shot glass",
        "Jar",
        "Irish coffee cup",
        "Punch bowl",
        "Pitcher",
        "Pint glass",
        "Copper Mug",
        "Wine Glass",
        "Beer mug",
        "Margarita / Coupette glass",
        "Beer pilsner",
        "Beer Glass",
        "Parfait glass",
        "Mason jar",
        "Margarita glass",
        "Martini Glass",
        "Balloon Glass",
        "Coupe Glass",
      ],
    },
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
