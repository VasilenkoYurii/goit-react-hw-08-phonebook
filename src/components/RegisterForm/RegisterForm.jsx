import { useDispatch } from 'react-redux';
import { register } from 'redux/authSlice/operations';
import {
  RegisterFormBox,
  Label,
  Input,
  Button,
  RegisterFormContainer,
  RegisterFormTitle,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormContainer>
      <RegisterFormBox onSubmit={e => handleSubmit(e)}>
        <RegisterFormTitle>Sign Up</RegisterFormTitle>
        <Label>
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="The password cannot be less than eight characters and must contain at least one number, one lowercase and one uppercase Latin letter."
          />
        </Label>
        <Button type="submit">Register</Button>
      </RegisterFormBox>
    </RegisterFormContainer>
  );
};
