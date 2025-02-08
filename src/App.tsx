import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Auth from "./components/Auth";

import "./App.css"
const App: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [signup, setSignup] = useState(false);


  return (
    <div
      style={{
        height: '100vh',
        overflowY: 'auto',
        position: 'relative'
      }}
    >
      <Navbar setOpenModal={setOpenModal} />
      <Hero 
        authenticated={authenticated}
        setOpenModal={setOpenModal}
      />
      <Main 
        authenticated={authenticated}
        setOpenModal={setOpenModal}
      />
      <div
        className="d-block d-sm-none position-fixed"
        style={{ bottom: "20px", right: "20px" }}
        onClick={() => {
            if (!authenticated) setOpenModal(true);
        }}
      > 
        <img
          src="/circle-pencil.svg"
          alt=""
          width={54}
          height={54}
        />
      </div>
      <Auth 
        openModal={openModal}
        setOpenModal={setOpenModal}
        signup={signup}
        setSignup={setSignup}
        setAuthenticated={setAuthenticated}
      />
    </div>
  );
};

export default App;
