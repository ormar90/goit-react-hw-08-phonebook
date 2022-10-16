import { Component } from "react";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactList/ContactsList";
import { Wrapper } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    if (JSON.parse(localStorage.getItem("contacts"))) {
      this.setState({ contacts: JSON.parse(localStorage.getItem("contacts"))})
    }    
  }

  formSubmit = (data) => {
    if (this.state.contacts.some(contact => contact.name.toLocaleLowerCase().trim() === data.name.toLocaleLowerCase().trim())) {
      Report.failure(
        `${data.name} is already in contacts.`,
        '',
        'Okay',
        );
      return;
    }
    this.setState((state) => {
      return { contacts: state.contacts.concat(data) }       
    })  
  } 
  
  onFilter = (e) => {
    this.setState({filter: e.currentTarget.value.toLowerCase().trim()})
  }

  deliteContact = ({currentTarget}) => {
    // console.log(currentTarget.id);
    this.setState((state) => {
      return {
        contacts: state.contacts.filter((contact) => {
          return (contact.id !== currentTarget.id)
        })
      }  
    })      
  }

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(this.state.filter))
    return (
      <div>
        <Wrapper>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmit} />
        </Wrapper>

        {this.state.contacts.length > 0 &&
          <Wrapper>
          <h2>Contacts</h2>
          <Filter onFilter={this.onFilter} />
          <ContactsList
            contactsArray={filteredContacts}
            deliteContact={this.deliteContact} />          
        </Wrapper>}        
      </div>
    );
  }
}