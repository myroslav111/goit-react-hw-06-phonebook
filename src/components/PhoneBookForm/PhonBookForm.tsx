import Button from "./Button";
import InputName from "./InputName";
import InputNumber from "./InputNumber";
import { Form } from "./PhoneBookForm.styled";
import { connect } from "react-redux";
import { useState } from "react";
import actions from "../../redux/actions";

interface IFormData {
  name: string;
  number: string;
  id?: string;
}

function FormPhonebook(props: any) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  // записываем значение инпута по name
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // при сабмите отправляем в App данные для создания обьекта контакта
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData: IFormData = { name, number };
    const target = e.target as typeof e.target & {
      name: { value: string };
      number: { value: string };
    };
    formData.name = target.name.value;
    formData.number = target.number.value;
    props.submit(formData);
    reset();
  };

  // очищаем инпуты
  const reset = () => {
    setName("");
    setNumber("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputName value={name} onChange={handleChange} />
      <InputNumber value={number} onChange={handleChange} />
      <Button />
    </Form>
  );
}

const mapDispathToProps = (dispatch: any) => ({
  submit: (formData: IFormData) => dispatch(actions.addContacts(formData)),
});

export default connect(null, mapDispathToProps)(FormPhonebook);
