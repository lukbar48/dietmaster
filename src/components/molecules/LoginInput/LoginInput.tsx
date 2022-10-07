import { ILoginInput } from 'types/types';
import React from 'react';
import { Input, Label, Wrapper } from './LoginInput.styles';

const LoginInput = React.forwardRef(({ label, name, id, type, value, onChange, ...props }: ILoginInput, ref: any) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} type={type} id={id} onChange={onChange} value={value} {...props} ref={ref} />
    </Wrapper>
  );
});

export default LoginInput;
