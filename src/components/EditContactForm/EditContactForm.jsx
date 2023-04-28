import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { editContact } from 'redux/contactsSlice/operetions';

import {
  MainForm,
  Label,
  Input,
  Button,
  ContactsformBackdrop,
  CloseBox,
  FormTitle,
} from './EditContactForm.styled';

export const EditContactForm = ({ selectedContact, closeEditModal }) => {
  const [id] = useState(selectedContact.id);
  const [name, setName] = useState(selectedContact.name);
  const [number, setNumber] = useState(selectedContact.number);

  const dispatch = useDispatch();

  const onChange = e => {
    e.currentTarget.name === 'name'
      ? setName(e.currentTarget.value)
      : setNumber(e.currentTarget.value);
  };

  const handleSubmit = () => {
    const userObj = {
      id: id,
      name: name,
      number: number,
    };
    dispatch(editContact(userObj));
    closeEditModal();
  };

  return (
    <ContactsformBackdrop>
      <Formik initialValues={(name, number)} onSubmit={handleSubmit}>
        <MainForm autoComplete="off">
          <CloseBox
            onClick={() => {
              closeEditModal();
            }}
          />
          <FormTitle>Edit contact form</FormTitle>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={onChange}
              value={name}
            />
          </Label>
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={onChange}
              value={number}
            />
          </Label>

          <Button type="submit">Edit contact</Button>
        </MainForm>
      </Formik>
    </ContactsformBackdrop>
  );
};

EditContactForm.propTypes = {
  selectedContact: PropTypes.object.isRequired,
  closeEditModal: PropTypes.func.isRequired,
};
