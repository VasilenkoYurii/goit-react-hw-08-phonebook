import styled from '@emotion/styled';

export const Button = styled.button`
  width: 75px;
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

export const Item = styled.li`
  display: flex;
  justify-content: space-between;

  border-bottom: 2px solid #b7a99f;
`;

export const NameContainer = styled.div`
  display: flex;
`;

export const NamePrg = styled.p`
  width: 300px;
  height: 30px;
`;
