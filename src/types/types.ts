export interface ButtonType {
  children: any;
  backgroundColor?: string;
  marginLeft?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
  color?: string;
}

export type PatientType = {
  _id: string;
  name: string;
  surname: string;
  age: string;
  sex: string;
  email: string;
  telephone: string;
  bodymass: string;
  height: string;
  notes: string;
  activity: string;
  calories: string;
  protein: string;
  fat: string;
  carbs: string;
  allergens: string[];
  preferences: string[];
  diseases: string[];
  tests: { date: string; type: string; value: string }[];
  appointments: {
    date: string;
    bodymass: string;
    BMI: string;
    hips: string;
    waist: string;
  }[];
};
