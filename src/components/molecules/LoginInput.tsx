import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px;
  margin: 10px 0;
  border-radius: 6px;
  border: none;
`;
const Label = styled.label`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

interface ILoginInput {
  label: string;
  name: string;
  id: string;
  type: string;
  value?: string;
  onChange?: (data: any) => void;
}

const LoginInput = React.forwardRef(({ label, name, id, type, value, onChange, ...props }:ILoginInput, ref: any) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} type={type} id={id} onChange={onChange} value={value} {...props} ref={ref} />
    </Wrapper>
  );
}) 

export default LoginInput;
