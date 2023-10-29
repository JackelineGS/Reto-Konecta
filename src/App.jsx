import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadCv } from "./pages/uploadCv";
import { FormularioCv } from "./pages/formularioCv";
import { Navbar } from "./components/navbar";
import { BackButton } from "./components/backButton";
import { Portada } from "./pages/portada";
import { PagesOffers } from "./pages/pagesOffers";
import OffersId from "./funciones/offersId";
import ModalBienvenida from "./components/modalBienvenida";
import ModalValidarDatos from "./components/modalValidarDatos";
import ModalEstadoValidacion from "./components/modalEstadovalidacion";
import ModalValidado from "./components/modalValidado"
import { ModalApto } from "./components/modalApto";
import Tabla from "./admin/Adcomponents/tabla"


import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Portada />}></Route>
          <Route path='/ofertas' element={<PagesOffers />}></Route>
          <Route path='/ofertas/:id' element={<OffersId />}></Route>
          <Route path='/modal/bienvenida/:id' element={<ModalBienvenida />}></Route>
          <Route
            path='/modal/bienvenida/validacion/:id'
            element={<ModalValidarDatos />}
          ></Route>
          <Route
            path='/modal/validado/:id'
            element={<ModalEstadoValidacion />}
          ></Route>
          <Route path='/cargarCv/:id' element={<UploadCv />}></Route>
          <Route path='/formulario' element={<FormularioCv />}></Route>
          <Route path='/tabla' element={<Tabla/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
