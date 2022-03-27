import { v4 as uuidv4 } from "uuid";
import s from "./ContactList.module.css";

function ContactList({ getVisibleContacts, onDeleteContact }) {
  return (
    <>
      <ul>
        {getVisibleContacts.map((contact) => (
          <li className={s.contactList} key={uuidv4()}>
            {contact.name}: {contact.number}
            <button
              className={s.btnDelete}
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
