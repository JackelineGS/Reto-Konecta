
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Administrador } from './pages/administrador'
import { Login } from './pages/login'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/administrador' element={<Administrador/>} />
      </Routes>
    </BrowserRouter>
  )
}




