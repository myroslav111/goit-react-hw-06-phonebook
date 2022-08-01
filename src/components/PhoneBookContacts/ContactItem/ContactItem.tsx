import { ButtonDelete, Item, Name, Number } from "./ContactItem.styled";

function ContactItem() {
  return (
    <Item>
      <div>
        <Name>kjkjjkj:</Name>
        <Number> 67676767</Number>
      </div>

      <ButtonDelete type="button">delete</ButtonDelete>
    </Item>
  );
}

export default ContactItem;
