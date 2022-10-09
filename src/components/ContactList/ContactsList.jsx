import PropTypes from 'prop-types';

import { Contacts } from "components/Contacts/Contacts";
import { ContactList } from './ContactsList.styled';

export const ContactsList = ({contactsArray, deliteContact}) => {
    return (
        <>
            <ContactList>
                <Contacts
                    contactsArray={contactsArray}
                    deliteContact={deliteContact} />
            </ContactList>
        </>
    );
}

ContactsList.propTypes = {
    contactsArray: PropTypes.array.isRequired,
    deliteContact: PropTypes.func,
}