import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UploadCv } from "./pages/uploadCv";
import { FormularioCv } from "./pages/formularioCv";
import { Navbar } from "./components/navbar";
import { BackButton } from "./components/backButton";
import { PagesOffers } from "./pages/pagesOffers";
import OffersId from "./funciones/offersId";
import ModalBienvenida from "./components/modalBienvenida";
import ModalValidarDatos from "./components/modalValidarDatos";
import ModalEstadoValidacion from "./components/modalEstadoValidacion";
import ModalValidado from "./components/modalValidado"
import { ModalApto } from "./components/modalApto";
import { ModalNoApto } from "./components/modalNoApto";
import "./App.css";
import { ModalEvaluaciones } from "./components/modalEvaluaciones";
import  BasicModal  from "./components/basicModal.jsx";
import Formulario from "./components/formulario";
import  Ofertas  from "./components/offers";
import ListaPostulantes from "./admin/Adcomponents/listaPostulantes";
import Tabla from "./admin/Adcomponents/tabla";
import ModalExisteValidacion from "./components/modalExisteValidacion";
import Portada from "./pages/portada";
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
          {/* <Route path='/ofertas' element={<Ofertas />}></Route> */}
          <Route path='/ofertas/:id' element={<OffersId />}></Route>
          <Route path="/modal/bienvenida/:id" element={<ModalBienvenida/>}></Route>
          <Route path="/modal/bienvenida/validacion/:id" element={<ModalValidarDatos/>}></Route>
          <Route path="/modal/validado/:id" element={<ModalEstadoValidacion/>}></Route>
          <Route path="/modal/validando/:id" element={<ModalValidado/>}></Route>
          <Route path="/modal/validando/" element={<ModalExisteValidacion/>}></Route>
          <Route path="/modal/redirigiendo/:id" element={<BasicModal/>}></Route>
          <Route path="/modal/validando/:id/apto" element={<ModalApto/>}></Route>
          <Route path="/modal/validando/:id/noapto" element={<ModalNoApto/>}></Route>
          <Route path="/modal/validando/:id/apto/evaluaciones" element={<ModalEvaluaciones/>}></Route>
          <Route path='/cargarCv/:id' element={<UploadCv />}></Route>
          <Route path='/formulario/:id' element={<FormularioCv />}></Route>
          <Route path='/tabla' element={<Tabla/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;