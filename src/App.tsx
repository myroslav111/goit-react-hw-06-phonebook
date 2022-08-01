import { Route, Routes } from "react-router-dom";
import AddContact from "./page/AddContact";
import PhoneBook from "./page/PhoneBook";
import Navigation from "./components/Navigation";
// import store from "./redux/store";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<AddContact />} />
        <Route path="/contacts" element={<PhoneBook />} />
      </Routes>
    </>
  );
}

export default App;
