import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button/Button';
import logo from '../assets/images/logo.png';
import { useAuth } from 'contexts/AuthContext';
import { Wrapper, Image, Form } from './Login.styles';
import LoginInput from 'components/molecules/LoginInput/LoginInput';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-top: -10px;
`;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<{ email: string; password: string }>();
  const { logIn, errMsg } = useAuth();

  return (
    <Wrapper>
      <Image src={logo} />
      <Form onSubmit={handleSubmit(logIn)}>
        <Text>Log In</Text>
        <LoginInput id="email" label="Email" type="email" {...register('email', { required: true })} />
        <LoginInput id="password" label="Password" type="password" {...register('password', { required: true })} />
        <Button type="submit">Log in</Button>
        <Button onClick={() => navigate(`/register`)} backgroundColor="#e55656">
          Register
        </Button>
      </Form>
      {errMsg ? <ErrorMessage /> : null}
    </Wrapper>
  );
};

export default Login;
