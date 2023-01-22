import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home.component';
import Login from './routes/auth/Login.component';

import Dashboard from './components/Usuarios/UsuarioValid/MainColumn/Dashboard.component';

import Normas from './components/Usuarios/Anonimo/MainColumn/Normas.component';
import Contacto from './components/Usuarios/Anonimo/MainColumn/Contacto.component';
import Infraestructura from './components/Usuarios/Anonimo/MainColumn/Infraestructura.component';
import EquipoDirectivo from './components/Usuarios/Anonimo/MainColumn/EquipoDirectivo.component';
import AsignaturasRamas from './components/Usuarios/Anonimo/MainColumn/AsignaturasRamas.component';
import Perfil from './components/Usuarios/UsuarioValid/MainColumn/Perfil.component';
import PaginaChat from './components/Usuarios/UsuarioValid/MainColumn/PaginaChat.component';
import Horario from './components/Usuarios/UsuarioValid/MainColumn/Horario.component';


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="anonimo" element={<Home isAnonimo />} >
        <Route index element={<Infraestructura />} />
        <Route path="equipo" element={<EquipoDirectivo />} />
        <Route path="asignaturas" element={<AsignaturasRamas />} />
        <Route path="normativa" element={<Normas />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>

      <Route path="dashboard" element={<Home isAnonimo={false} />} >
        <Route index element={<Dashboard />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="horario" element={<Horario />} />
        <Route path="chats" element={<PaginaChat />} />
      </Route>
    </Routes>
  )
}

export default App;