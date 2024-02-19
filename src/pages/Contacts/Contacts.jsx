import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';

import { fetchContacts } from '../../redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectIsLoading,
  selectError,
  selectIsEdit,
} from '../../redux/contacts/contacts-selectors';

import styles from './contacts.module.css';
import EditForm from 'components/EditForm/EditForm';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isEdit = useSelector(selectIsEdit);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {isEdit ? <EditForm /> : <ContactForm />}

      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactList />}
    </div>
  );
};

export default ContactsPage;
