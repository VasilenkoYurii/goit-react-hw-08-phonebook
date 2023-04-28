import styled from '@emotion/styled';

export const ContactsPageContainer = styled.div`
  width: 1100px;
  position: relative;
`;

export const AddContactsButton = styled.button`
  position: absolute;
  top: 20px;
  right: 55px;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;

  font-family: 'Caveat', sans-serif;
  font-size: 20px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  transition-duration: 150ms;
  transition-property: all;

  &:hover {
    background-color: #008296;
    box-shadow: 0 0 10px #008296, 0 0 20px #00b2b2, 0 0 40px #008296;
    color: white;
  }
`;

export const ContactsPageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 20px;

  border-radius: 5px;

  box-shadow: rgb(255 255 255) 0px 2px 10px 1px;
  background-image: linear-gradient(90deg, #0cffff1c, #00152926);
`;

export const LoadingBox = styled.div`
  padding-top: 20px;
  color: white;

  font-size: 20px;
  height: 30px;
`;
