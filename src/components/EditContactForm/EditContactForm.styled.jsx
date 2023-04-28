import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { GrClose } from 'react-icons/gr';

export const ContactsformBackdrop = styled.div`
  position: fixed;
  inset: 0%;
  background-color: rgba(44, 39, 50, 0.68);
  z-index: 1;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainForm = styled(Form)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  width: 270px;

  background-color: #fffffff2;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const CloseBox = styled(GrClose)`
  top: 10px;
  right: 10px;
  width: 22px;
  height: 22px;

  position: absolute;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
    width: 30px;
    height: 30px;
  }
`;

export const FormTitle = styled.h2`
  padding-top: 30px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;

  font-size: 20px;
  font-weight: 600;

  width: 100%;
`;

export const Input = styled(Field)`
  font-size: 18px;
  background: #66999963;
  outline: none;
  border: none;
  border-bottom: 1px solid #000;
`;

export const Button = styled.button`
  background-color: #fff;
  border: 1px solid #000;
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
    border: 1px solid #d5d9d9;
  }
`;
