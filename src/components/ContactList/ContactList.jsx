import { useDispatch, useSelector } from 'react-redux';
import css from './contactList.module.css';
import {
  selectFilteredContacts,
  selectIsEdit,
} from '../../redux/contacts/contacts-selectors';
import { delContactById } from '../../redux/contacts/contacts-operation';
import { Button, Stack } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  setIdAction,
  setIsEditAction,
} from '../../redux/contacts/contactsSlice';

const ContactList = () => {
  const contactlist = useSelector(selectFilteredContacts);
  const isEdit = useSelector(selectIsEdit);
  const dispatch = useDispatch();

  const deleteContact = ({ target }) => {
    const id = target.dataset.id;
    dispatch(delContactById(id));
  };

  const editContact = ({ target }) => {
    dispatch(setIsEditAction(true));
    dispatch(setIdAction(target.dataset.id));
  };

  const elements = contactlist.map(item => (
    <li key={item.id} className={css.list_item}>
      <span className={css.list_title}>
        {item.name}: {item.number}
      </span>
      <Stack direction="row" spacing={4}>
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="teal"
          variant="solid"
          data-id={item.id}
          onClick={deleteContact}
          isDisabled={isEdit}
        >
          Delete
        </Button>
        <Button
          rightIcon={<EditIcon />}
          colorScheme="teal"
          variant="outline"
          data-id={item.id}
          onClick={editContact}
          isDisabled={isEdit}
        >
          Edit
        </Button>
      </Stack>
    </li>
  ));

  return <ul className="list-group">{elements}</ul>;
};

export default ContactList;
