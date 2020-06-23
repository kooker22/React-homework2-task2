import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class Form extends Component {
  state = {
    name: '',
    id: '',
    number: '',
  };
  handleChangeName = e => {
    const { name, value, number } = e.currentTarget;
    this.setState({ id: uuidv4(), [name]: value, [number]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };
  handleChangeNumber = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  resetForm = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChangeName}
          ></input>
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChangeNumber}
          ></input>
        </label>
        <button type="submit">add contact</button>
      </form>
    );
  }
}

export default Form;
