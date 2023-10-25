import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadCv } from "./pages/uploadCv";
import Formulario from "./pages/formulario";
import { Navbar } from "./components/navbar";
import { BackButton } from "./components/backButton";
import { Portada } from "./pages/portada";
import { Offers } from "./pages/portada";
import { OffersId } from "./pages/portada";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar> 
        <Navbar />
        <BackButton />
        <Routes>
          <Route path='/' element={<Portada />}></Route>
          <Route path='/ofertas' element={<Offers />}></Route>
          <Route path='/ofertas/:id' element={<OffersId />}></Route>
          <Route path='/cargarCv' element={<UploadCv />}></Route>
          <Route path='/formulario' element={<Formulario />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;