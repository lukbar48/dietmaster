import React from 'react';
import { Input, Label, Wrapper } from './LoginInput.styles';

export interface LoginInputType {
  label: string;
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  onChange: (data: any) => void;
  value?: string;
}

const LoginInput = React.forwardRef(({ label, name, id, type, value, onChange, ...props }: LoginInputType, ref: any) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} type={type} id={id} onChange={onChange} value={value} {...props} ref={ref} />
    </Wrapper>
  );
});

export default LoginInput;
