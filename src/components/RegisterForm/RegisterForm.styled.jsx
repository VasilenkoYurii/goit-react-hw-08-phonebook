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
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 10px;

  width: 270px;

  background-color: #ffffff91;

  font-size: 18px;
  font-weight: 700;
  color: black;
  border-bottom: 2px double black;

  transition: all 0.5s ease;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const RegisterFormTitle = styled.h2`
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;

  font-size: 16px;
  font-weight: 600;

  width: 100%;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  background: #66999963;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: 'Caveat', sans-serif;
  font-size: 20px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  width: 200px;
  transition-duration: 150ms;
  transition-property: all;

  &:hover {
    background-color: #008296;
    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;
    color: white;
  }
`;
