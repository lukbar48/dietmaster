import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button/Button';
import LoginInput from 'components/molecules/LoginInput';
import logo from '../assets/images/logo.png'
import React from 'react';
import styled from 'styled-components';
import { useAuth } from 'hooks/useAuth';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  padding: 30px 20px;
  margin-bottom: 50px;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(54, 44, 44, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

const Image = styled.img`
  height: 100px;
  margin: 15px;
`

const Login = () => {
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <Image src={logo} />
      <Form onSubmit={handleSubmit(signIn)}>
        <LoginInput id="login" label="Login" type="text" placeholder='login: jack123' {...register('login', { required: true })} />
        {/* {errors.login ?? <h6>Login is required</h6>} */}
        <LoginInput id="password" label="Password" type="password" placeholder='pass: Pass123' {...register('password', { required: true })} />
        {/* {errors.password ?? <h6>Password is required</h6>}  */}
        <Button type="submit">Sign in</Button>
      </Form>
    </Wrapper>
  );
};

export default Login;
