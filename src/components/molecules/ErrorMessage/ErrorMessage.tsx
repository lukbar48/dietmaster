import React from 'react';
import { Wrapper } from './ErrorMessage.styles';

const defaultErrorMsg = 'Invalid email or password.';

const ErrorMessage = ({ message = defaultErrorMsg }: { message?: string }) => {
  return (
    <Wrapper>
      <h4>Error</h4>
      <p>{message}</p>
    </Wrapper>
  );
};

export default ErrorMessage;
