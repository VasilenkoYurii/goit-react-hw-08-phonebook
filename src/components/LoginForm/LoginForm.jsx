import { useDispatch } from 'react-redux';
import { logIn } from 'redux/authSlice/operations';
import {
  RegisterFormContainer,
  RegisterFormBox,
  Label,
  Input,
  Button,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormContainer>
      <RegisterFormBox
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <Button type="submit">Log In</Button>
      </RegisterFormBox>
    </RegisterFormContainer>
  );
};
