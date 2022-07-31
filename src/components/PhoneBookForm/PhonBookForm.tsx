import Button from "./Button";
import InputName from "./InputName";
import InputNumber from "./InputNumber";
import { Form } from "./PhoneBookForm.styled";

function FormPhonebook() {
  return (
    <Form>
      <InputName />
      <InputNumber />
      <Button />
    </Form>
  );
}

export default FormPhonebook;
