import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from 'Redux/selectors';
import { getStatusFilter } from 'Redux/selectors';

import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filters = useSelector(getStatusFilter);
  const getVisibleContacts = () => {
    if (filters !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filters.toLowerCase())
      );
    }
    return contacts;
  };

  const visibleContacts = getVisibleContacts(contacts, filters);

  const dispatch = useDispatch();

  const onDeleteContact = evt => {
    dispatch(deleteContact(evt));
  };

  return (
    <ul className={css.contactList}>
      {contacts.length > 0 &&
        visibleContacts.map(({ name, number }) => (
          <li className={css.contacts__item} key={nanoid()}>
            <p className={css.contacts__name}>{name}</p>
            <p className={css.contacts__number}>{number}</p>
            <button
              type="button"
              className={css.delete__btn}
              onClick={() => onDeleteContact(name)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
