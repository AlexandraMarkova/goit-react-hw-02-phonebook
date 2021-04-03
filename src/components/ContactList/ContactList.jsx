import React from 'react';

const ContactList = ({ contacts }) =>
  contacts !== [] ? (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: <span>{contact.number}</span>
        </li>
      ))}
    </ul>
  ) : null;
export default ContactList;
