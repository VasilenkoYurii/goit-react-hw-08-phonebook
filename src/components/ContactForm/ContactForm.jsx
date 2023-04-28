import { useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { addContact } from 'redux/contactsSlice/operetions';
import {
  MainForm,
  Label,
  Input,
  Button,
  ContactsformBackdrop,
  CloseBox,
  FormTitle,
} from './ContactForm.styled';

function ContactForm({ closeModal }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onChange = e => {
    e.currentTarget.name === 'name'
      ? setName(e.currentTarget.value)
      : setNumber(e.currentTarget.value);
  };

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    const userObj = {
      name: name,
      number: number,
    };
    dispatch(addContact(userObj));
    setName('');
    setNumber('');
    closeModal();
  };

  return (
    <ContactsformBackdrop>
      <Formik initialValues={(name, number)} onSubmit={handleSubmit}>
        <MainForm autoComplete="off">
          <CloseBox onClick={() => closeModal()} />
          <FormTitle>Add contact form</FormTitle>
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
              pattern="[\d ()+]*"
              required
              onChange={onChange}
              value={number}
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </MainForm>
      </Formik>
    </ContactsformBackdrop>
  );
}

ContactForm.prototype = {
  closeModal: PropTypes.func.isRequired,
};

export default ContactForm;
