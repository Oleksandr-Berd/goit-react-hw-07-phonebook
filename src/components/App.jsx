import React from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1 className={css.titlePhonebook}>Phonebook</h1>
      <Form />
      <Filter />
      <h2 className={css.contactList}>Contacts</h2>
      <ContactList />
    </div>
  );
}
