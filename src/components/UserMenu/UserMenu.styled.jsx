import styled from '@emotion/styled';

export const UserMenuBox = styled.div`
  display: flex;
  align-items: center;
`;

export const UserPrg = styled.p`
  margin-right: 15px;
  font-size: 22px;
  color: white;
`;

export const UserButton = styled.button`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: 'Caveat', sans-serif;
  font-size: 16px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  width: 100px;
  transition-duration: 150ms;
  transition-property: all;

  &:hover {
    background-color: #008296;
    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;
    color: white;
  }
`;
