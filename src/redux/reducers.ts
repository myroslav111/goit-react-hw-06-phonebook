import { combineReducers } from "redux";
import types from "./actions-types";

interface IContactObj {
  id: string;
  name: string;
  number: string;
}

interface IContacts {
  items: IContactObj[];
  filter: "";
}

const contacts: IContacts = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
};

// const initialContacts =
const items = (state: Object[] = contacts.items, { type, payload }: any) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DEL_CONTACT:
      return state.filter((contact: any) => contact.id !== payload);

    default:
      return state;
  }
};

const filterData = (
  state: string = contacts.filter,
  { type, payload }: any
) => {
  switch (type) {
    case types.FILTER_CONTACTS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filterData,
});
