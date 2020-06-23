import React, { Component } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import 'modern-normalize/modern-normalize.css';
import Filter from './components/Filter/Filter';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.notifyExistingName(data);
    // this.setState({ contacts: [...this.state.contacts, data] });
    console.log(this.state);
  };
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  notifyExistingName = data => {
    const aaa = this.state.contacts.find(contact => contact.name === data.name);
    if (aaa) {
      this.setState(this.state);
      alert(`${data.name} is already in contacts`);
    } else {
      this.setState({ contacts: [...this.state.contacts, data] });
    }
  };
  deleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));

    // console.log(contactForDelete);
  };
  render() {
    const { contacts, filter } = this.state;
    const normolizeContact = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeContact),
    );

    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter
          contacts={contacts}
          value={filter}
          onChange={this.changeFilter}
        />
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
export default Phonebook;
