import { Contacts } from "components/Contacts/Contacts";
import { useSelector } from "react-redux";
import { ContactList } from './ContactsList.styled';

export const ContactsList = () => {

    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
    const filteredContacts = contacts.filter((contact) => {
        const name = contact.name.toLowerCase();
            return name.includes(filter.trim());
        })
    
    return (
        <ContactList>
                {filteredContacts.map((contact) => {
                    return <Contacts contact={contact} key={contact.id} />
                })}
            </ContactList>
    );
}