import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home.component';
import Login from './routes/auth/Login.component';

import Dashboard from './components/Usuarios/UsuarioValid/MainColumn/Dashboard.component';

import Infrastructura from './components/Usuarios/Anonimo/MainColumn/Infrastructura.component';
import EquipoDirectivo from './components/Usuarios/Anonimo/MainColumn/EquipoDirectivo.component';
import AsignaturasRamas from './components/Usuarios/Anonimo/MainColumn/AsignaturasRamas.component';
import Normas from './components/Usuarios/Anonimo/MainColumn/Normas.component';
import Contacto from './components/Usuarios/Anonimo/MainColumn/Contacto.component';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="anonimo" element={<Home isAnonimo />} >
        <Route index element={<Infrastructura />} />
        <Route path="equipo" element={<EquipoDirectivo />} />
        <Route path="asignaturas" element={<AsignaturasRamas />} />
        <Route path="normativa" element={<Normas />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>

      <Route path="dashboard" element={<Home isAnonimo={false} />} >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App;