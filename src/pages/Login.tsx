import { useForm } from 'react-hook-form';
import Button from 'components/atoms/Button/Button';
import logo from '../assets/images/logo.png'
import { useAuth } from 'hooks/useAuth';
import { Wrapper, Form, Image } from './Login.styles';
import LoginInput from 'components/molecules/LoginInput';


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
