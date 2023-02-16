import "./App.css";
import { FaBars } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);

  const showSidebar = () => {
    setSidebar(true);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <div className="App">
      <FaBars className="bars" onClick={showSidebar} />
      <button className="btn-modal" onClick={showModal}>
        Show Modal
      </button>
      {modal && <Modal setModal={setModal} />}
      <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
}

export default App;
