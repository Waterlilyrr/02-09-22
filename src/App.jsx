import MovieEntity from "./components/MovieEntity";
import MainSection from "./components/MainSection";
import MainInput from "./components/MainInput";
import Navbar from "./components/Navbar";
import MainModal from "./components/MainModal";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");

  //Modale
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };
  // console.log(inputValue);

  return (
    <div className="App">
      <Navbar />
      <MainModal
        data={modalData}
        isVisibile={isModalVisibile}
        onModalClick={setModalVisibility}
      />
      <MainSection modalVisibility={onHandleModal} />
      <MainInput inputValue={inputValue} setInputValue={setInputValue} />
      <MovieEntity movieID={inputValue ? inputValue : 324668} />
    </div>
  );
}

export default App;
