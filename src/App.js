import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);

    const todo = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [todo, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} />

          <h2>Contacts</h2>
          {/* <Filter ... /> */}
          <ContactList contacts={this.state.contacts} />
        </div>
      </Container>
    );
  }
}

export default App;