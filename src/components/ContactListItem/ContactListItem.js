import React from 'react';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ contacts, onDeleteContact }) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.item} key={id}>
        {name}: {number}
        <button
          className={styles.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="13px"
            height="13px"
            viewBox="0 0 32 32"
          >
            <g id="trash">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#333333"
                d="M29.98,6.819c-0.096-1.57-1.387-2.816-2.98-2.816h-3v-1V3.001
		c0-1.657-1.344-3-3-3H11c-1.657,0-3,1.343-3,3v0.001v1H5c-1.595,0-2.885,1.246-2.981,2.816H2v1.183v1c0,1.104,0.896,2,2,2l0,0v17
		c0,2.209,1.791,4,4,4h16c2.209,0,4-1.791,4-4v-17l0,0c1.104,0,2-0.896,2-2v-1V6.819H29.98z M10,3.002c0-0.553,0.447-1,1-1h10
		c0.553,0,1,0.447,1,1v1H10V3.002z M26,28.002c0,1.102-0.898,2-2,2H8c-1.103,0-2-0.898-2-2v-17h20V28.002z M28,8.001v1H4v-1V7.002
		c0-0.553,0.447-1,1-1h22c0.553,0,1,0.447,1,1V8.001z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#333333"
                d="M9,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1H9
		c-0.553,0-1,0.447-1,1v13C8,27.559,8.447,28.006,9,28.006z M9,14.005h2v13H9V14.005z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#333333"
                d="M15,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2
		c-0.553,0-1,0.447-1,1v13C14,27.559,14.447,28.006,15,28.006z M15,14.005h2v13h-2V14.005z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#333333"
                d="M21,28.006h2c0.553,0,1-0.447,1-1v-13c0-0.553-0.447-1-1-1h-2
		c-0.553,0-1,0.447-1,1v13C20,27.559,20.447,28.006,21,28.006z M21,14.005h2v13h-2V14.005z"
              />
            </g>
          </svg>
        </button>
      </li>
    ))}
  </>
);

export default ContactListItem;
