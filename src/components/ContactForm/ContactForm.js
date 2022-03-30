import React, { Component } from 'react';
import shortid from 'shortid';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };
  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: shortid.generate() });
  };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    return this.setState({ name: '', number: '', id: '' });
  };

  render() {
    return (
      <form className="ContactForm" onSubmit={this.onFormSubmit}>
        <label className="ContactForm__label">Name</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className="ContactForm__input"
          onChange={this.handleInputChange}
        />
        <label className="ContactForm__label">Number</label>
        <input
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          className="ContactForm__input"
          onChange={this.handleInputChange}
        />
        <button type="submit" className="ContactForm__btn">
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
