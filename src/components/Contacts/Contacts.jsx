import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";
import { ListItem } from "./Contacts.styled";

export const Contacts = ({contact}) => {
    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(deleteContact(contact.id));
    }

    return (
        <ListItem>
            {contact.name}: {contact.number}
            <button type="button" onClick={handleClick}>Delete</button>                    
        </ListItem>                
    );
}