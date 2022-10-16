import { Component } from "react";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactsList } from "./ContactList/ContactsList";
import { Wrapper } from "./App.styled";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    this.setState({ contacts: JSON.parse(localStorage.getItem("contacts"))})
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