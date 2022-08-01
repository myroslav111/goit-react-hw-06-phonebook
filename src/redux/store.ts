import { createStore } from "redux";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };
interface IContacts {
  items: string[];
  filter: "";
}

const contacts: IContacts = {
  items: [],
  filter: "",
};

const reducer = (state: any = contacts, action: any) => {
  switch (action.type) {
    case "contacts/data":
      return {};

    default:
      return state;
  }
};

const store = createStore(reducer);
// можно передать пред. состояние
// const store = createStore(reducer, {prev.state});

export default store;
