import { useEffect, useState } from 'react';
import { editContactAction } from '../../redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectEditContact,
} from '../../redux/contacts/contacts-selectors';
import { regExpPattern } from 'regexp/regexp';

import css from './editForm.module.css';

const EditForm = () => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const contacts = useSelector(selectAllContacts);
  const editData = useSelector(selectEditContact);

  const dispatch = useDispatch();

  useEffect(() => {
    setFormData({ name: editData.name, number: editData.number });
  }, [editData]);

  const editContact = e => {
    e.preventDefault();
    // перевірка на коректність введених даних
    if (regExpPattern.name.test(name) && regExpPattern.phone.test(number)) {
      // перевірка на наявність контакту по номеру
      if (!contacts.some(contact => contact.number === number)) {
        dispatch(editContactAction({ id: editData.id, body: { ...formData } }));
        setFormData({
          name: '',
          number: '',
        });
      } else {
        alert('Такий контакт вже існує');
        return;
      }
    } else {
      alert('Введені дані некоректні');
      return;
    }
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, number } = formData;
  return (
    <form className={css.save_form} onSubmit={editContact}>
      <div className="mb-3">
        <label htmlFor="exampleInputName1" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          className="form-control"
          aria-describedby="nameHelp"
          required
          onChange={handleInput}
        />
        <div id="nameHelp" className="form-text">
          Please edit contact fields.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPhone1" className="form-label">
          Phone number
        </label>
        <input
          type="tel"
          className="form-control"
          id="exampleInputPhone1"
          name="number"
          value={number}
          onChange={handleInput}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Edit contact
      </button>
    </form>
  );
};

export default EditForm;
