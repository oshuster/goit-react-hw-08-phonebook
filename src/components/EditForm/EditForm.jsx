import { useEffect, useState } from 'react';
import { editContactAction } from '../../redux/contacts/contacts-operation';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectEditContact,
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
import {
  setIdAction,
  setIsEditAction,
} from '../../redux/contacts/contactsSlice';

const initState = { name: '', number: '' };

const EditForm = () => {
  const [formData, setFormData] = useState(initState);

  const contacts = useSelector(selectAllContacts);
  const editData = useSelector(selectEditContact);

  const dispatch = useDispatch();

  const editContact = e => {
    e.preventDefault();
    // перевірка на коректність введених даних
    if (regExpPattern.name.test(name) && regExpPattern.phone.test(number)) {
      // перевірка на наявність контакту по номеру
      if (!contacts.some(contact => contact.number === number)) {
        dispatch(editContactAction({ id: editData.id, body: { ...formData } }));
        // setFormData(initState);
      } else {
        alert('Такий контакт вже існує');
        return;
      }
    } else {
      alert('Введені дані некоректні');
      return;
    }
  };

  const cancelChange = () => {
    setFormData(initState);
    dispatch(setIsEditAction(false));
    dispatch(setIdAction(''));
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    setFormData({ name: editData.name, number: editData.number });
  }, [editData]);

  const { name, number } = formData;
  return (
    <form onSubmit={editContact}>
      <FormControl isRequired mb={15}>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Name"
          name="name"
          value={name}
          onChange={handleInput}
        />
        <FormHelperText>Please edit contact fields.</FormHelperText>
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
      <Box display="flex" justifyContent="space-between" width="100%">
        <Button
          colorScheme="teal"
          variant="solid"
          type="button"
          onClick={cancelChange}
        >
          Cancel
        </Button>
        <Button colorScheme="teal" variant="solid" type="submit">
          Save changes
        </Button>
      </Box>
    </form>
  );
};

export default EditForm;
