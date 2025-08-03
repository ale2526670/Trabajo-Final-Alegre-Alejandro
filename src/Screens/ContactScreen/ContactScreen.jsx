import React, { useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService';




const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);
    return (
        <div className="contact-screen">
            <ContactList contacts={contactsState} />
        </div>
    );
};

export default ContactScreen;