import { useDispatch, useSelector } from 'react-redux';
import css from './contactList.module.css';
import {
  selectFilteredContacts,
  selectIsEdit,
} from '../../redux/contacts/contacts-selectors';
import { delContactById } from '../../redux/contacts/contacts-operation';
import { Avatar, Box, Text, Flex, IconButton, Stack } from '@chakra-ui/react';
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
    const button = target.closest('.deleteItem');
    const id = button.dataset.id;
    dispatch(delContactById(id));
  };

  const editContact = ({ target }) => {
    const button = target.closest('.editItem');
    dispatch(setIsEditAction(true));
    dispatch(setIdAction(button.dataset.id));
  };

  const elements = contactlist.map(item => (
    <li key={item.id} className={css.list_item}>
      <Flex mr="auto" alignItems="center">
        <Avatar name={item.name} src="" bg="teal.500" />
        <Box ml="3" alignItems="center">
          <Text fontWeight="bold" mb="1">
            {item.name}
          </Text>
          <Text fontSize="sm" m="0">
            {item.number}
          </Text>
        </Box>
      </Flex>
      <Stack direction="column" spacing={2}>
        <IconButton
          className="deleteItem"
          colorScheme="teal"
          aria-label="Delete contact"
          size="sm"
          isRound={true}
          icon={<DeleteIcon />}
          data-id={item.id}
          onClick={deleteContact}
          isDisabled={isEdit}
        />
        <IconButton
          className="editItem"
          variant="outline"
          colorScheme="teal"
          aria-label="Edit contact"
          size="sm"
          isRound={true}
          icon={<EditIcon />}
          data-id={item.id}
          onClick={editContact}
          isDisabled={isEdit}
        />
      </Stack>
    </li>
  ));

  return <ul className="list-group">{elements}</ul>;
};

export default ContactList;
