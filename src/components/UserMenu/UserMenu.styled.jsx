import styled from '@emotion/styled';

export const UserPrg = styled.p`
  margin-bottom: 10px;
`;

export const UserButton = styled.button`
  width: 300px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  background-color: #aa9a8e;
  color: black;

  transition: all 0.5s ease;

  &:hover {
    background-color: #988270;
    color: #262626;
  }
`;
