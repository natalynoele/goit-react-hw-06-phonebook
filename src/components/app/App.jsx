import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactList from 'components/contactsList/ContactList';
import Filter from 'components/Filter';
import ContactForm from 'components/contactForm/ContactForm';
import Container from './App_Style';

const App = () => {
    return (
    <Container>
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </Container>
  );
};

export default App;
