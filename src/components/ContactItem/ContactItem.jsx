import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'helperFunctions/helperFunctions';
import { getContacts } from 'redux/contactsSlice/selectors';
import { getFiltedContacts } from 'redux/filterSlice/filterSlice';
import { deleteContact } from 'redux/contactsSlice/operetions';
import { Button, Item, NameContainer, NamePrg } from './ContactItem.styled';

const ContactItem = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const filter = useSelector(getFiltedContacts);
  // console.log(contacts);

  return getVisibleContacts(contacts, filter).map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <NameContainer>
          <NamePrg>{name}:</NamePrg>
          <p>{number}</p>
        </NameContainer>
        <Button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </Button>
      </Item>
    );
  });
};

export default ContactItem;
