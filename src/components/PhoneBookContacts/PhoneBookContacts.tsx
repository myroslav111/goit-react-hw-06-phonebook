import { ListWraper, BoxList } from "./PhoneBookContacts.styled";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "./ContactItem";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import "./animations/animation.css";
// import { connect } from "react-redux";

function PhoneBookContacts() {
  const arrContacts = useSelector((state: RootState) => state.items);
  const filteredString = useSelector((state: RootState) => state.filter);

  // отфильтрованый масив контактов отвечающий поиску
  const getVisibleContact = (allContact: Object[], filter: string) => {
    const normalizeFilter = filter.toLowerCase();
    return allContact.filter((contact: any) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const filtered = getVisibleContact(arrContacts, filteredString);

  return (
    <BoxList>
      <TransitionGroup component={ListWraper}>
        {filtered.map((contact: any) => (
          <CSSTransition key={contact.id} timeout={250} classNames="fade">
            <ContactItem contact={contact} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </BoxList>
  );
}

export default PhoneBookContacts;

/**------------------------------------------------------------------------------- */
// function PhoneBookContacts({ arrContacts }: any) {
//   return (
//     <BoxList>
//       <TransitionGroup component={ListWraper}>
//         {arrContacts.map((contact: any) => (
//           <CSSTransition key={contact.id} timeout={250} classNames="fade">
//             <ContactItem contact={contact} />
//           </CSSTransition>
//         ))}
//       </TransitionGroup>
//     </BoxList>
//   );
// }
// // отфильтрованый масив контактов отвечающий поиску
// const getVisibleContact = (allContact: Object[], filter: string) => {
//   const normalizeFilter = filter.toLowerCase();
//   return allContact.filter((contact: any) =>
//     contact.name.toLowerCase().includes(normalizeFilter)
//   );
// };
// // exemple
// // const mapStateToProps = (state: any) => {
// //   const { items, filterData } = state.contact;
// //   // const normalizeFilter = filterData.toLowerCase();
// //   // const visibleTodos = items.filter((contact: any) =>
// //   //   contact.name.toLowerCase().includes(normalizeFilter)
// //   // );
// //   // отфильтрованый масив контактов отвечающий поиску
// //   const visibleTodos = getVisibleContact(items, filterData);

// //   return {
// //     arrContacts: visibleTodos,
// //   };
// // };

// const mapStateToProps = ({ contact: { items, filterData } }: any) => ({
//   arrContacts: getVisibleContact(items, filterData),
// });

// export default connect(mapStateToProps, null)(PhoneBookContacts);
