const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    surname: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
    sex: {
      type: String,
    },
    email: {
      type: String,
    },
    telephone: {
      type: String,
    },
    bodymass: {
      type: String,
    },
    height: {
      type: String,
    },
    notes: {
      type: String,
    },
    activity: {
      type: String,
    },
    calories: {
      type: String,
    },
    protein: {
      type: String,
    },
    fat: {
      type: String,
    },
    carbs: {
      type: String,
    },
    allergens: {
      type: Array,
    },
    preferences: {
      type: Array,
    },
    diseases: {
      type: Array,
    },
    tests: {
      type: Array,
    },
    appointments: {
      type: Array,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Patient', patientSchema);

export {};
