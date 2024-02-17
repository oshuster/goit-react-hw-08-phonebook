import { nanoid } from 'nanoid';

export const itemsMenu = [
  { id: nanoid(), to: '/', text: 'Home', private: false },
  { id: nanoid(), to: 'contacts', text: 'Contacts', private: true },
];
