import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadCv } from "./pages/uploadCv";
import Formulario from "./components/formulario";
import { Navbar } from "./components/navbar";
import { BackButton } from "./components/backButton";
import { Portada } from "./pages/portada";
import OffersId from "./funciones/offersId";
import ModalBienvenida from "./components/modalBienvenida";
import ModalValidarDatos from "./components/modalValidarDatos";
import ModalEstadoValidacion from "./components/modalEstadovalidacion";
import ModalValidado from "./components/modalValidado"
import { ModalApto } from "./components/modalApto";



/*import ModalCrearExp from "./components/modalCrearExp";
import ModalCursos from './components/modalCursos';
import ModalHabilidades from './components/modalHabilidades';
import ModalIdiomas from './components/modalIdiomas';
import ModalInstitucion from './components/modalInstitucion';
import { Navbar } from "./components/navbar";
import ModalInstitucion from './components/modalInstitucion';*/

import "./App.css";
//import { SideBar } from "./components/sideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BackButton />
        <Routes>
          <Route path='/' element={<Portada />}></Route>
          <Route path='/ofertas/:id' element={<OffersId />}></Route>
          <Route path="/modal/bienvenida/:id" element={<ModalBienvenida/>}></Route>
          <Route path="/modal/bienvenida/validacion/:id" element={<ModalValidarDatos/>}></Route>
          <Route path="/modal/validado/:id" element={<ModalEstadoValidacion/>}></Route>
          <Route path="/modal/validando/:id" element={<ModalValidado/>}></Route>
          <Route path="/modal/validando/:id/apto" element={<ModalApto/>}></Route>
          <Route path='/cargarCv/:id' element={<UploadCv />}></Route>
          <Route path='/formulario' element={<Formulario />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
