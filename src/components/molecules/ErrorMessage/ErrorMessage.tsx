import React from 'react';
import { Wrapper } from './ErrorMessage.styles';

const defaultErrorMsg = 'Invalid email or password.';

const ErrorMessage = ({ message = defaultErrorMsg, type }: { message: string; type: 'error' | 'success' }) => {
  return (
    <Wrapper type={type}>
      <h4>{type.toLocaleUpperCase()}</h4>
      <p>{message}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
