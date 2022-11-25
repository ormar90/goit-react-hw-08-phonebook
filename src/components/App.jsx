import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactList/ContactsList";
import { Wrapper } from "./App.styled";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
      <div>
        <Wrapper>
          <h1>Phonebook</h1>
          <ContactForm/>
        </Wrapper>
        
        {contacts.length > 0 &&  
          <Wrapper>
            <h2>Contacts</h2>
            <Filter/>
            <ContactsList/>
          </Wrapper>}
      </div>
    );
  }