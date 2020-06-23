import React from 'react';

const ContactListItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id)}>
          X
        </button>
      </li>
    ))}
  </>
);

export default ContactListItem;
