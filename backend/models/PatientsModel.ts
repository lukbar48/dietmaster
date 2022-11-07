import { Schema, model } from 'mongoose';

const patientSchema = new Schema(
  {
    name: {
      type: String,
    },
    surname: {
      type: String,
      default: '',
    },
    age: {
      type: String,
      default: '',
    },
    sex: {
      type: String,
    },
    bodymass: {
      type: String,
      default: '',
    },
    height: {
      type: String,
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
      default: '1.2',
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
    user_id: {
      type: String,
      require: true,
    },
  },
  { timestamps: true },
);

const Patient = model('Patient', patientSchema);

export default Patient;
