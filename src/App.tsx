import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div>
      <Navbar setOpenModal={setOpenModal}/>
      <Hero />
    </div>
  );
};

export default App;
