import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';
import { getContacts } from 'redux/selectors';
import { getVisibleContacts } from 'functions/getVisibleContacts';
import { INFO } from 'redux/constants';
import { Label, Input } from './contactForm/ContactForm_Style';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const handleFilter = e => {
    if (contacts.length === 0) {
      toast.error(INFO.emptyPhoneBook);
    }
    if (contacts.length > 0 && visibleContacts.length === 0) {
      toast.info(INFO.noMatches);
    }
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        title="Write down a word for searching"
        value={filter}
        onChange={handleFilter}
      />
    </>
  );
};

export default Filter;
