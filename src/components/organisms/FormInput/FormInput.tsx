import React from 'react';
import { Controller, Control, FieldError, Path, RegisterOptions } from 'react-hook-form';
import CustomInput from '../CustomInput/CustomInput';

export type FormInputProps = {
  control: Control<any>;
  name: Path<any>;
  error?: FieldError;
  placeholder?: string;
  onChangeCallback?: (value: string) => void;
  required?: boolean;
  label?: string;
  isTextArea?: boolean;
  rules?: Pick<RegisterOptions, 'max' | 'maxLength' | 'min' | 'minLength' | 'required'>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = ({ required = true, type = 'text', ...props }) => {
  return (
    <>
      <Controller
        control={props.control}
        name={props.name}
        rules={{
          required,
          ...props.rules,
        }}
        render={({ field: { onChange, value } }) => (
          <CustomInput
            value={value}
            handleTextChange={(text) => {
              onChange(text);
              props.onChangeCallback?.(text);
            }}
            label={props.label}
            placeholder={props.placeholder}
            max={props.max}
            {...props}
          />
        )}
      />
    </>
  );
};
