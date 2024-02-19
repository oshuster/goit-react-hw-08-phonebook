import { useEffect, useState } from 'react';
import { addContactAction } from '../../redux/contacts/contacts-operation';
import { setNeedReset } from '../../redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  needReset,
  selectAllContacts,
} from '../../redux/contacts/contacts-selectors';
import { regExpPattern } from 'regexp/regexp';

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

const initState = { name: '', number: '' };

const ContactForm = () => {
  const [formData, setFormData] = useState(initState);
  const contacts = useSelector(selectAllContacts);
  const isReset = useSelector(needReset);
  const dispatch = useDispatch();

  const saveContact = e => {
    e.preventDefault();
    // перевірка на коректність введених даних
    if (regExpPattern.name.test(name) && regExpPattern.phone.test(number)) {
      // перевірка на наявність контакту по номеру
      if (!contacts.some(contact => contact.number === number)) {
        dispatch(addContactAction(formData));
      } else {
        alert('Такий контакт вже існує');
        return;
      }
    } else {
      alert('Введені дані некоректні');
      return;
    }
  };

  useEffect(() => {
    setFormData(initState);
    dispatch(setNeedReset(false));
  }, [isReset, dispatch]);

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const { name, number } = formData;
  return (
    <form onSubmit={saveContact}>
      <FormControl isRequired mb={15}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInput}
        />
        <FormHelperText>Please enter your name.</FormHelperText>
      </FormControl>
      <FormControl isRequired mb={15}>
        <FormLabel>Number</FormLabel>
        <Input
          type="tel"
          placeholder="+380912345678"
          name="number"
          value={number}
          onChange={handleInput}
        />
      </FormControl>
      <Box display="flex" justifyContent="flex-end" width="100%">
        <Button colorScheme="teal" variant="solid" type="submit">
          Add contact
        </Button>
      </Box>
    </form>
  );
};

export default ContactForm;
