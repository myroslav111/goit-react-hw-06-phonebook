import FormPhonebook from "../../components/PhoneBookForm/PhonBookForm";
import { Container } from "./AddContacts.styled";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContact = () => {
  return (
    <Container>
      <FormPhonebook />
      <ToastContainer autoClose={3000} />
    </Container>
  );
};

export default AddContact;
