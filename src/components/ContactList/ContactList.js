import React from 'react';

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(
      ({ id, name }) => (console.log(name), (<li key={id}>{name}</li>)),
    )}
  </ul>
);
export default ContactList;
