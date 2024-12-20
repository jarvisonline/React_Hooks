import "./App.css";
import { useRef } from "react";
import Modal from "./Modal";

function App() {
  const modalRef = useRef();
  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  console.log(`parent rendered`);
  return (
    <main className="App">
      <p>Parent Componenet</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open Modal</button>
    </main>
  );
}

export default App;
