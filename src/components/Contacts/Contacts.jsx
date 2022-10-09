import { ListItem } from "./Contacts.styled";

export const Contacts = ({ contactsArray, deliteContact }) => {
    return (
        <>
            {contactsArray.map((item) => {
                return <ListItem key={item.id}>
                        {item.name}: {item.number}
                        <button id={item.id} type="button" onClick={deliteContact}>Delete</button>                    
                    </ListItem>                
            })}            
        </>
    );
}