import { Route, Routes } from "react-router-dom";
import AddContact from "./page/AddContact";
import PhoneBook from "./page/PhoneBook";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <>
      <Navigation />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<AddContact />} />
          <Route path="/contacts" element={<PhoneBook />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
