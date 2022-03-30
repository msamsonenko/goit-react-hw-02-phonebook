import './ContactList.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="ContactList">
      {contacts.map(contact => {
        return (
          <li key={contact.id} className="ContactList__item">
            <span className="ContactList__name">{contact.name}</span>
            <span className="ContactList__number">{contact.number}</span>
            <button
              type="button"
              className="ContactList__btn"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
