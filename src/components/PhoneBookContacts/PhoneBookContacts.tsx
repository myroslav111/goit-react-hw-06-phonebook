import { ListWraper, BoxList } from "./PhoneBookContacts.styled";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import "./animations/animation.css";
// import actions from "../../redux/actions";

function PhoneBookContacts({ arrContacts }: any) {
  return (
    <BoxList>
      {/* <ListWraper> */}
      {/* <ContactItem /> */}
      <TransitionGroup component={ListWraper}>
        {arrContacts.map((contact: any) => (
          <CSSTransition key={contact.id} timeout={250} classNames="fade">
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
      {/* </ListWraper> */}
    </BoxList>
  );
}

const mapStateToProps = (state: any) => ({
  arrContacts: state.contact.items,
});

// const mapDispatchToProps = (dispatch: any) => ({
//   onDeleteContact: (id: string) => dispatch(actions.deleteData(id)),
// });

export default connect(mapStateToProps, null)(PhoneBookContacts);
