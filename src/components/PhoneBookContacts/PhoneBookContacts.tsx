import ContactItem from "./ContactItem";
import { ListWraper, BoxList } from "./PhoneBookContacts.styled";
// import { TransitionGroup } from "react-transition-group";
// CSSTransition,
//
function PhoneBookContacts() {
  return (
    <BoxList>
      <ListWraper>
        <ContactItem />
        {/* <TransitionGroup> */}
        {/* {arrContacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} classNames="fade">
            <ListContactItem
              key={contact.id}
              arrContacts={contact}
              onDeleteContact={onDeleteContact}
            />
          </CSSTransition>
        ))} */}

        {/* </TransitionGroup> */}
      </ListWraper>
    </BoxList>
  );
}

export default PhoneBookContacts;
