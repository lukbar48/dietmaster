import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button/Button';
import logo from '../assets/images/logo.png';
import { useAuth } from 'hooks/useAuth';
import { Wrapper, Form, Image } from './Login.styles';
import LoginInput from 'components/molecules/LoginInput/LoginInput';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const Login = () => {
  const { signIn, errMsg } = useAuth();

  const { register, handleSubmit } = useForm();

  return (
    <Wrapper>
      <Image src={logo} />
      <Form onSubmit={handleSubmit(signIn)}>
        <LoginInput id="login" label="Login" type="text" placeholder="login: jack123" {...register('login', { required: true })} />
        <LoginInput id="password" label="Password" type="password" placeholder="pass: Pass123" {...register('password', { required: true })} />
        <Button type="submit">Sign in</Button>
      </Form>
      {errMsg ? <ErrorMessage /> : null}
    </Wrapper>
  );
};

export default Login;
