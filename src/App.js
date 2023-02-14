import "./styles.css";
import { useEffect, useState } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home.jsx";
import Favoritos from "./views/Favoritos.jsx";
import MyContext from "./context/MiContexto.jsx";

 function App() {
  const [fotos, setFotos]= useState([]);
  const compartirDatos = {fotos,setFotos};

  async function obtenerDatos(){
    const res = await fetch("/fotos.json");
    const data = await res.json();
    console.log (data)
   setFotos(data.photos);

    };
  
  useEffect(() => {
    obtenerDatos([]);
    },[]);

  return (
    <div className="App">
     <MyContext.Provider value={compartirDatos}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
export default App;