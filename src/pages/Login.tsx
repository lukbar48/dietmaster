import Button from 'components/atoms/Button/Button';
import LoginInput from 'components/molecules/LoginInput';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 20px;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: 6px;
`;

const Login = () => {
  return (
    <Wrapper>
      <Form>
        <LoginInput></LoginInput>
        <Button>Sign in</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
