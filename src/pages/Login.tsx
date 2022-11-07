import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button/Button';
import logo from '../assets/images/logo.png';
import { useAuthContext } from 'contexts/AuthContext';
import { Wrapper, Image, Form } from './Login.styles';
import LoginInput from 'components/molecules/LoginInput/LoginInput';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import styled from 'styled-components';
import { authorizeAxiosClient } from '../helpers/axiosInit';

const Text = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.l};
  margin-top: -10px;
`;

const Login = () => {
  const { register, handleSubmit, reset } = useForm<{ email: string; password: string }>();
  const { logIn, message, register: registerUser, isLoading } = useAuthContext();

  const submitLogin = async (data: { email: string; password: string }) => {
    const user = await logIn(data);
    if (user) authorizeAxiosClient(user.token);
  };
  const submitRegister = async (data: { email: string; password: string }) => {
    const user = await registerUser(data);
    if (user) reset();
  };

  return (
    <Wrapper>
      <Image src={logo} />
      <Form>
        <LoginInput id="email" label="Email" type="email" {...register('email', { required: true })} />
        <LoginInput id="password" label="Password" type="password" {...register('password', { required: true })} />
        <Button onClick={handleSubmit(submitLogin)} type="submit">
          Log in
        </Button>
        <Button onClick={handleSubmit(submitRegister)} backgroundColor="#e55656">
          Register
        </Button>
        {isLoading && <Text>loading...</Text>}
      </Form>
      {message && <ErrorMessage type={message.type} message={message.text} />}
    </Wrapper>
  );
};

export default Login;
