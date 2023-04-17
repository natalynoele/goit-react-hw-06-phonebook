import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Span } from './Contact_Style';
import Button from 'components/button/Button';
import titleCase from 'functions/titleCase';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
 
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (  
      <>
        <Span>
          {titleCase(name)} {number}
        </Span>
        <Button type="button" clickBtn={handleDelete}>
          Delete
        </Button>
      </>  
  );
};
