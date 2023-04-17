export const ADD_CONTACT = 'ADD_CONTACT',
  FIND_CONTACT = 'FIND_CONTACT',
  DELETE_CONTACT = 'DELETE_CONTACT',
  SET_FILTER = 'SET_FILTER',
  INFO = {
    sameName: ' is already in contacts',
    emptyPhoneBook:
      'There are currently no contacts. Add the contacts, please.',
    noMatches: 'There is no contact under such a name.',
  },
  CONTACTS_INITIAL_STATE = {
    data: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  
  FILTER_INITIAL_STATE = { value: ''};
