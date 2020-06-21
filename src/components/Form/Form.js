import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class Form extends Component {
  state = {
    name: '',
    id: '',
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: uuidv4() });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  //   resetForm = () => {
  //     this.props.onReset(this.name);
  //     this.name = 'name';
  //   };
  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">add contact</button>
      </form>
    );
  }
}

export default Form;
