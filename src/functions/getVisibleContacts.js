export const getVisibleContacts = (contacts, filterValue) => {
   
  const normalizeFilter = filterValue !== '' ? filterValue.toLowerCase() : '';
  if (contacts.length > 0) {
    return contacts.filter(contact =>
      
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }
};
