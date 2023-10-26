import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadCv } from "./pages/uploadCv";
import Formulario from "./pages/formulario";
import { BackButton } from "./components/backButton";
import { Portada } from "./pages/portada";
import  Ofertas  from "./components/offers";
import  OffersId  from "./funciones/offersId";
import ListaPostulantes from "./admin/Adcomponents/listaPostulantes";
import Tabla from "./admin/Adcomponents/tabla";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <BackButton />
        <Routes>
          <Route path='/' element={<Portada />}></Route>
          <Route path='/ofertas' element={<Ofertas />}></Route>
          <Route path='/ofertas/:id' element={<OffersId />}></Route>
          <Route path='/cargarCv' element={<UploadCv />}></Route>
          <Route path='/formulario' element={<Formulario />}></Route>
          <Route path='/listaPostulantes' element={<ListaPostulantes />}></Route>
          <Route path='/tabla' element={<Tabla />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;