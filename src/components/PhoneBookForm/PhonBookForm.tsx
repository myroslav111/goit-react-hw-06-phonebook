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
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name);
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
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData: IFormData = { name, number };
    formData.name = e.target.name.value;
    formData.number = e.target.number.value;
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
