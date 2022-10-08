const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    name: {
      type: String,
      // require: true,
    },
    surname: {
      type: String,
      // require: true,
      default: 'default',
    },
    age: {
      type: String,
      // require: true,
      default: '',
    },
    sex: {
      type: String,
      // require: true,
    },
    bodymass: {
      type: String,
      // require: true,
      default: '',
    },
    height: {
      type: String,
      // require: true,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    telephone: {
      type: String,
      default: '',
    },
    notes: {
      type: String,
      default: '',
    },
    activity: {
      type: String,
      default: '',
    },
    calories: {
      type: String,
      default: '',
    },
    protein: {
      type: String,
      default: '',
    },
    fat: {
      type: String,
      default: '',
    },
    carbs: {
      type: String,
      default: '',
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
