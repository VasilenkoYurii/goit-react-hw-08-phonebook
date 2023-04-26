import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
`;

export const Input = styled(Field)`
  margin-left: 40px;
  font-size: 16px;

  background: #d7d1c9;
`;

export const Button = styled.button`
  width: 300px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #aa9a8e;
  color: black;

  transition: all 0.5s ease;

  &:hover {
    background-color: #988270;
    color: #262626;
  }
`;
