import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getVisibleContacts } from 'helperFunctions/helperFunctions';
import { getContacts } from 'redux/contactsSlice/selectors';
import { getFiltedContacts } from 'redux/filterSlice/filterSlice';
import { deleteContact } from 'redux/contactsSlice/operetions';
import {
  Button,
  Item,
  NameContainer,
  NamePrg,
  NumberPrg,
  ButtonContainer,
} from './ContactItem.styled';

const ContactItem = ({ selectedContact, openEditModal }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFiltedContacts);

  const handleEdit = (id, name, number) => {
    selectedContact({ id, name, number });
    openEditModal();
  };

  return getVisibleContacts(contacts, filter).map(({ id, name, number }) => {
    return (
      <Item key={id}>
        <NameContainer>
          <NamePrg>{name}:</NamePrg>
          <NumberPrg>{number}</NumberPrg>
        </NameContainer>
        <ButtonContainer>
          <Button
            type="button"
            onClick={() => {
              handleEdit(id, name, number);
            }}
          >
            Edit
          </Button>
          <Button
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </Button>
        </ButtonContainer>
      </Item>
    );
  });
};

ContactItem.prototype = {
  selectedContact: PropTypes.func.isRequired,
  showEditModal: PropTypes.func.isRequired,
};

export default ContactItem;
