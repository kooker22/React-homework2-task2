import React, { Component } from 'react';
import Form from './components/Form';
import ContactList from './components/ContactList';
import 'modern-normalize/modern-normalize.css';

class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      prevState.contacts.push(data);
    });
  };
  render() {
    console.log(this.state);
    const { contacts } = this.state;
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        <ContactList contacts={contacts} />
      </>
    );
  }
}
export default Phonebook;
