import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/login";
import { UploadCv } from "./pages/uploadCv";
import Formulario from "./components/formulario";
import ModalCrearExp from "./components/modalCrearExp";
import ModalCursos from './components/modalCursos';
import ModalHabilidades from './components/modalHabilidades';
import ModalIdiomas from './components/modalIdiomas';
import ModalInstitucion from './components/modalInstitucion';

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/cargarCv' element={<UploadCv />}></Route>
          <Route path='/formulario' element={<Formulario />}></Route>
          <Route path='/modal/exp' element={<ModalCrearExp />}></Route>
          <Route path='/modal/cursos' element={<ModalCursos />}></Route>
          <Route path='/modal/habilidades' element={<ModalHabilidades />}></Route>
          <Route path='/modal/idiomas' element={<ModalIdiomas />}></Route>
          <Route path='/modal/institucion' element={<ModalInstitucion />}></Route>
        </Routes>
      </BrowserRouter>
      {/*<div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
    </>
  );
}

export default App;