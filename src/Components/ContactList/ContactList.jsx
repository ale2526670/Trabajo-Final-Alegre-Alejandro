import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { Link } from "react-router";

const ContactList = ({ contacts }) => {
  return (
    <div className="contact-map">
        <div className="contact-icons-container">
          <div className='contanct-icons'>
            <Link to="/"><i className="bi bi-chat-left-text-fill"></i></Link>
            <i className="bi bi-disc"></i>
            <i className="bi bi-chat-quote"></i>
            <i className="bi bi-people"></i>
          </div>
          <div className="contact-config">
            <i className="bi bi-gear"></i>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className="contact-config-avatar" />
          </div>
        </div>         
        <div className='contact-list'>
          <div className="contact-title-container">
            <h1><Link className="contact-title" to="/">WhatApp</Link></h1>
            <div className="contact-title-icons">
              <i className="bi bi-plus-square"></i>
              <i className="bi bi-three-dots-vertical"></i>
          </div>
          </div>
          <div className="contact-search-container">
            <i className="bi bi-search"></i>
            <input  type="search" placeholder="Buscar un chat" className="contact-search" />
          </div>
          {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
    </div>
  );
};

export default ContactList;