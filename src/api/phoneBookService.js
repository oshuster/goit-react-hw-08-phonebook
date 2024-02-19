import instance from './auth-service';

export const getContacts = () => {
  return instance.get('/contacts');
};

export const delContact = id => {
  return instance.delete(`/contacts/${id}`);
};

export const addContact = body => {
  return instance.post('/contacts', body);
};

export const editContact = ({ id, body }) => {
  return instance.patch(`/contacts/${id}`, body);
};
