export const contacts = (value: string[]) => ({
  type: "contacts/data",
  payload: value,
});

export const filter = (value: string) => ({
  type: "filter/data",
  payload: value,
});
