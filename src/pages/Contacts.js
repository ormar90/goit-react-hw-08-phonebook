import { Wrapper } from "components/App.styled"
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactsList } from "components/ContactList/ContactsList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch} from "react-redux"
import { fetchContacts } from "redux/Contacts/operations"

export const Contacts = () => {

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
          
          <Wrapper>
            <h2>Contacts</h2>
            <Filter/>
            <ContactsList/>
        </Wrapper>
    </div>
  )
}

