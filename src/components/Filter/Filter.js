import React from 'react';

const Filter = ({ value, contacts, onChange }) =>
  contacts.length > 2 && (
    <label>
      Contact Filter
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );

export default Filter;
