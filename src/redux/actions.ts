import { nanoid } from "nanoid";

const addContacts = (value: any) => ({
  type: "contacts/data",
  payload: {
    id: nanoid(),
    // когда имя свойства и значения = тогда достаточно имя свойства
    name: value.name,
    number: value.number,
  },
});

const deleteData = (id: string) => ({
  type: "delete/data",
  payload: id,
});
// const filter = (value: string) => ({
//   type: "filter/data",
//   payload: value,
// });

const actions: any = {
  addContacts: addContacts,
  deleteData: deleteData,
};

export default actions;
