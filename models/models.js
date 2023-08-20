const { Schema, model } = require("mongoose");

const { handleSaveError, handleUpdateValidate } = require("./hooks.js");

const modelSchema = new Schema({}, { versionKey: false, timestamps: true });

modelSchema.pre("findByIdAndUpdate", handleUpdateValidate);

modelSchema.post("save", handleSaveError);

modelSchema.post("findByIdAndUpdate", handleSaveError);

const Model = model("model", modelSchema);

module.exports = Model;
