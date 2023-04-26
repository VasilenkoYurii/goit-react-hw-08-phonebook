import styled from '@emotion/styled';

export const RegisterFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input`
  font-size: 16px;

  background: #d7d1c9;
`;

export const Button = styled.button`
  width: 300px;
  height: 30px;
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
