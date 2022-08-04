import { combineReducers } from "redux";
// import { nanoid } from "nanoid";
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
const items = (state: any = contacts.items, action: any) => {
  switch (action.type) {
    case "contacts/data":
      return [...state, action.payload];

    case "delete/data":
      return state.filter((contact: any) => contact.id !== action.payload);

    default:
      return state;
  }
};

const filterData = (state: any = contacts.filter, action: any) => {
  switch (action.type) {
    case "filter/data":
      return "";

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filterData,
});
