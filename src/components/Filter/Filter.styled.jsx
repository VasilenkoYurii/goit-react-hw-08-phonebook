import styled from '@emotion/styled';

export const SearchLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding-bottom: 15px;
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const SearchTitle = styled.h2`
  color: white;
  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const SearchInput = styled.input`
  background-color: #f5f5f53b;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid white;
  font-size: 18px;
  color: white;
  border-radius: 3px;
`;
