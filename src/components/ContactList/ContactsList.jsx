import { Contacts } from "components/Contacts/Contacts";
import { useSelector } from "react-redux";
import { selectContacts, selectFilter } from "redux/Contacts/selectors";
import { ContactList, FailMessage } from './ContactsList.styled';

export const ContactsList = () => {

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const filteredContacts = contacts.filter((contact) => {
        const name = contact.name.toLowerCase();
        return name.includes(filter.toLowerCase().trim());
    })

    return (
        <ContactList>
            {filteredContacts.length
                ? filteredContacts.map((contact) => {
                    return <Contacts contact={contact} key={contact.id} />
                })
                : <FailMessage><span>{filter}</span> not found</FailMessage>
            }
        </ContactList>
    );
}