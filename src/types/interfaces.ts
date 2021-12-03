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
  id: number;
  index: number;
}

export const initialPatientValues = {
  id: 0,
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
  allergens: [''],
  preferences: [''],
  diseases: [''],
  tests: [{ date: '2021-01-26', type: 'Red blood cells', value: '75mg' }],
  appointments: [
    {
      date: '2021-06-05',
      bodymass: '82',
      BMI: '28',
      hips: '113',
      waist: '98',
    },
  ],
};

export type InitialPatientType = typeof initialPatientValues;

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
  patientID: number;
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