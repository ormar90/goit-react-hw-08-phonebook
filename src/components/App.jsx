import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactList/ContactsList";
import { Wrapper } from "./App.styled";
import { useSelector } from "react-redux";

export const App = () => {
  const contacts = useSelector(state => state.contacts)
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