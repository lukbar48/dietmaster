import { ReactNode } from 'react';

export interface IInitialState {
  name: string;
  surname: string;
  age: number;
  id: number;
  sex: string;
}

export interface IButton {
  children: string;
  backgroundColor?: string;
  marginLeft?: string;
  padding?: string;
  borderRadius?: string;
  fontSize?: string;
  onClick?: () => void;
  type?: 'submit' | 'reset' | 'button';
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