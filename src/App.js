import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import LayoutСontainer from "./hooks/LayoutСontainer/LayoutСontainer";
import Section from "./hooks/Section/Section";
import ContactForm from "./hooks/ContactForm/ContactForm";
import Filter from "./hooks/Filter/Filter";
import ContactList from "./hooks/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    let parsedContacts = JSON.parse(
      localStorage.getItem("myLocalStorageContacts")
    );
    console.log(parsedContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  });

  // useEffect(() => {
  //   localStorage.setItem("myLocalStorageContacts", JSON.stringify(contacts));
  // }, [contacts]);

  // componentDidMount() {
  //   let parsedContacts = JSON.parse(localStorage.getItem('myLocalStorageContacts'));
  //   console.log(parsedContacts);

  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts })

  //   }

  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('myLocalStorageContacts', JSON.stringify(this.state.contacts))
  //   }
  // }

  const handleFilterChange = (evt) => {
    setFilter(evt.currentTarget.value);
    // this.setState({
    //   filter: evt.currentTarget.value
    // })
  };

  const addContact = (name, number) => {
    const idContact = uuidv4();
    let nameFromInput = { name: name, number: number, id: idContact };
    const findContact = contacts.find(
      (contact) => contact.name === name && contact.number === number
    );
    console.log(findContact);

    if (findContact) {
      alert(`${name} is already in contacts!`);
      return;
    }

    setContacts([nameFromInput, ...contacts]);
    //   ((prevState) => ({
    //   contacts: [nameFromInput, ...prevState.contacts],
    // }));
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (idForDelete) => {
    setContacts(contacts.filter((contact) => contact.id !== idForDelete));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <LayoutСontainer>
      <h1>goit-react-hw-04-hooks-phonebook</h1>
      <Section title="Phonebook">
        <ContactForm addContact={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} оnChange={handleFilterChange}>
          <ContactList
            getVisibleContacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </Filter>
        {/* <ContactList
          getVisibleContact={visibleContacts}
          onDeleteContact={this.deleteContact}
        /> */}
      </Section>
    </LayoutСontainer>
    // <div className="LayoutСontainer">
    //   <h1>Phonebook</h1>
    //   {/* <ContactForm addContact={this.addContact} />
    // <h2>Contacts</h2>
    // <Filter value={this.state.filter} оnChange={this.handleFilterChange} />
    // <ContactList getVisibleContact={visibleContacts} onDeleteContact={this.deleteContact} /> */}
    // </div>
  );
}

export default App;
