import { Wrapper } from "components/App.styled"
import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactsList } from "components/ContactList/ContactsList"
import { ContactList } from "components/ContactList/ContactsList.styled"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectIsRefreshing } from "redux/Auth/selectors"
import { fetchContacts } from "redux/Contacts/operations"
import { selectContacts } from "redux/Contacts/selectors"

export const Contacts = () => {

  const contacts = useSelector(selectContacts);
  const isRefreshing = useSelector(selectIsRefreshing);
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

