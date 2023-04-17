import { useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/visibleContacts';
import { getContacts, getFilter } from 'redux/selectors';
import { Contact } from 'components/contact/Contact';
import { Item } from './ContactList_Style';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.length > 0 && getVisibleContacts(contacts, filter);
  return (
    visibleContacts.length > 0 && (
      <ul>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <Contact contact={contact} />
          </Item>
        ))}
      </ul>
    )    
  );
};

export default ContactList;
