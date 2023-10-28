import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadCv } from "./pages/uploadCv";
<<<<<<< HEAD
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
=======
import Formulario from "./components/formulario";
//import { BackButton } from "./components/backButton";
import { Portada } from "./pages/portada";
import  Ofertas  from "./components/offers";
import  OffersId  from "./funciones/offersId";
import ListaPostulantes from "./admin/Adcomponents/listaPostulantes";
import Tabla from "./admin/Adcomponents/tabla";
import ModalBienvenida from "./components/modalBienvenida";
import ModalValidarDatos from "./components/modalValidarDatos";
import ModalEstadoValidacion from "./components/modalEstadovalidacion";
import { Navbar } from "./components/navbar";
>>>>>>> 64ca0d0c4dab7bba9c34ebbacbf9607a494bea3e

/*import ModalCrearExp from "./components/modalCrearExp";
import ModalCursos from './components/modalCursos';
import ModalHabilidades from './components/modalHabilidades';
import ModalIdiomas from './components/modalIdiomas';
import ModalEstadoValidacion from "./components/modalEstadoValidacion";

import { Navbar } from "./components/navbar";
import ModalInstitucion from './components/modalInstitucion';*/

import "./App.css";
//import { BackButton } from "./components/backButton";
//import { SideBar } from "./components/sideBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Portada />}></Route>
          <Route path='/ofertas' element={<Ofertas />}></Route>
          <Route path='/ofertas/:id' element={<OffersId />}></Route>
<<<<<<< HEAD
          <Route path="/modal/bienvenida/:id" element={<ModalBienvenida/>}></Route>
          <Route path="/modal/bienvenida/validacion/:id" element={<ModalValidarDatos/>}></Route>
          <Route path="/modal/validado/:id" element={<ModalEstadoValidacion/>}></Route>
          <Route path="/modal/validando/:id" element={<ModalValidado/>}></Route>
          <Route path="/modal/validando/:id/apto" element={<ModalApto/>}></Route>
          <Route path='/cargarCv/:id' element={<UploadCv />}></Route>
          <Route path='/formulario' element={<Formulario />}></Route>
<<<<<<< HEAD
=======
          <Route path='/modal/bienvenida' element={<ModalBienvenida />}></Route>
          <Route
            path='/modal/bienvenida/validacion'
            element={<ModalValidarDatos />}
          ></Route>
          <Route
            path='/modal/validado'
            element={<ModalEstadoValidacion />}
          ></Route>
          <Route path='/cargarCv' element={<UploadCv />}></Route>
          <Route path='/formulario' element={<FormularioCv />}></Route>
          <Route path='/ofertas' element={<PagesOffers />}></Route>
>>>>>>> 52a30912fa033afb9588f3054cd37373d1d17669
=======
          <Route path='/listaPostulantes' element={<ListaPostulantes />}></Route>
          <Route path='/tabla' element={<Tabla />}></Route>
>>>>>>> 64ca0d0c4dab7bba9c34ebbacbf9607a494bea3e
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
