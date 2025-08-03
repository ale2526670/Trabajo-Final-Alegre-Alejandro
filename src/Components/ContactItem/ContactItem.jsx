import React from 'react';
import { Link } from 'react-router';

const ContactItem = ({ contact }) => {
    return (
        <Link to={`/contact/${contact.id}/messages`}>
            <div className='contact'>
                <div className="contact-avatar-container">
                    <img src={contact.avatar} alt={contact.name} width={100} className="contact-avatar" />
                    <h2 className="contact-name">{contact.name}</h2>
                </div>
                <span className="contact-last-connection">{contact.lastConnection}</span>
                <span className="contact-connection-status">{contact.connectionStatus}</span>
            </div>
        </Link>
    );
};

export default ContactItem;