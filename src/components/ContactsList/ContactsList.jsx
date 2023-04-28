import { useState } from 'react';
import { Ol } from './ContactsList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import { EditContactForm } from 'components/EditContactForm/EditContactForm';

const ContactsList = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const openEditModal = () => {
    setShowEditModal(() => true);
  };

  const closeEditModal = () => {
    setShowEditModal(() => false);
  };

  return (
    <>
      <Ol>
        <ContactItem
          selectedContact={setSelectedContact}
          openEditModal={openEditModal}
        />
      </Ol>
      {showEditModal && (
        <EditContactForm
          selectedContact={selectedContact}
          closeEditModal={closeEditModal}
        />
      )}
    </>
  );
};

export default ContactsList;
