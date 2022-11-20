import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { ListItem } from "./Contacts.styled";

export const Contacts = ({ contact }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteContact(contact.id));
    }

    return (
        <ListItem>
            <div><span>{contact.name}:</span> {contact.number}</div>
            <button type="button" onClick={handleClick}>Delete</button>
        </ListItem>
    );
}