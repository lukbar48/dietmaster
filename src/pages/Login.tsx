import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button/Button';
import LoginInput from 'components/molecules/LoginInput';
import React from 'react';
import styled from 'styled-components';
import { useAuth } from 'hooks/useAuth';

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

  h6 {
    color: red;
  }
`;

const Login = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(signIn)}>
        <LoginInput id="login" label="login" type="text" {...register('login', { required: true })} />
        {errors.login ?? <h6>Login is required</h6>}
        <LoginInput id="password" label="password" type="password" {...register('password', { required: true })} />
        {errors.password ?? <h6>Password is required</h6>} 
        <Button type="submit">Sign in</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
