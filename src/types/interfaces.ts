import { ReactNode } from 'react';

export interface IInitialState {
  name: string;
  surname: string;
  age: number;
  id: number;
  sex: string;
}

export interface IButton {
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

export interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
}

export interface IManageNavButton {
  children: ReactNode;
  to: string;
  exact?: boolean;
}

export interface ILoginInput {
  label: string;
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  onChange: (data: any) => void;
  value?: string;
}

export interface IPatientInfo {
  name: string;
  surname: string;
  age: string;
  _id: string;
  index: number;
}

export const initialPatientValues = {
  name: '',
  surname: '',
  age: '',
  sex: 'Male',
  email: '',
  telephone: '',
  bodymass: '',
  height: '',
  notes: '',
  activity: '1.2',
  calories: '0',
  protein: '5',
  fat: '15',
  carbs: '10',
  allergens: [],
  preferences: [],
  diseases: [],
  tests: [],
  appointments: [],
};

export type InitialPatientType = {
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

export interface IAllergensInput {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  setItem: React.Dispatch<React.SetStateAction<string>>;
  item: string;
  color?: string;
}

export interface IAllergensList {
  allergensList: string[];
  deleteItem: (choosedItem: string) => void;
  color?: string;
}

export interface IDeleteModal {
  handleCloseModal: () => void;
  patientID: string;
}

export interface IBloodTestPatientInfo {
  index: number;
  type: string;
  value: string;
  date: string;
}

export interface IAppointmentsPatientInfo {
  index: number;
  date: string;
  BMI: string;
  bodymass: string;
  hips: string;
  waist: string;
}

export interface IInfoModal {
  handleCloseModal: () => void;
  patientID: string;
}

export interface IModal {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: ReactNode;
}
