import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice/operetions';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { getLoading } from 'redux/contactsSlice/selectors';
import { ContactsPageBox } from './Contacts.styled';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactsPageBox>
        <ContactForm />
        <Filter />
      </ContactsPageBox>

      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
};

export default ContactsPage;
