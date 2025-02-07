import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import SubNav from "./components/SubNav";
const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div>
      <Navbar setOpenModal={setOpenModal}/>
      <Hero />
      <Main />
    </div>
  );
};

export default App;
