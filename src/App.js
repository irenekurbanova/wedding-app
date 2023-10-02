import { Fragment, useState } from "react";
import Invitation from "./components/Invitation";
import Programm from "./components/Programm";
import Footer from "./components/Footer";
import RegistrationForm from "./components/Form";

function App() {
  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };

  return (
    <Fragment>
      {formIsShown && <RegistrationForm onClose={hideFormHandler} />}
      <Invitation />
      <Programm onShowForm={showFormHandler} />
      <Footer />
    </Fragment>
  );
}

export default App;
