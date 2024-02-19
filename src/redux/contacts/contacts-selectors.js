export const selectAllContacts = store => store.contacts.items;

export const selectIsLoading = store => store.contacts.isLoading;

export const selectError = store => store.contacts.error;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  if (!filter) {
    return contacts.items;
  } else {
    return contacts.items.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.includes(filter)
    );
  }
};

export const selectIsEdit = store => store.contacts.isEdit;

export const selectEditContact = store =>
  store.contacts.items.find(item => item.id === store.contacts.idEdit);

export const needReset = store => store.contacts.needReset;
