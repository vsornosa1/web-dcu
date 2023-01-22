import './App.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './contexts/user.context';

import Home from './routes/home/Home.component';
import Login from './routes/auth/Login.component';

import Infraestructura from './components/Usuarios/Anonimo/MainColumn/Infraestructura.component';
import EquipoDirectivo from './components/Usuarios/Anonimo/MainColumn/EquipoDirectivo.component';
import AsignaturasRamas from './components/Usuarios/Anonimo/MainColumn/AsignaturasRamas.component';

import Normas from './components/Usuarios/Anonimo/MainColumn/Normas.component';
import Contacto from './components/Usuarios/Anonimo/MainColumn/Contacto.component';
import Perfil from './components/Usuarios/UsuarioValid/MainColumn/Perfil.component';
import Horario from './components/Usuarios/UsuarioValid/MainColumn/Horario.component';
import Dashboard from './components/Usuarios/UsuarioValid/MainColumn/Dashboard.component';
import PaginaChat from './components/Usuarios/UsuarioValid/MainColumn/PaginaChat.component';
import NotaAsignatura from './components/Usuarios/UsuarioValid/MainColumn/NotaAsignatura.component';


const App = () => {
  const { currentUser } = useContext(UserContext);
  console.log("🚀 ~ file: App.jsx:24 ~ App ~ currentUser", currentUser)

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
        <Route path="DEW" element={<NotaAsignatura />} />
        <Route path="DCU" element={<NotaAsignatura />} />
        <Route path="IAP" element={<NotaAsignatura />} />
      </Route>
    </Routes>
  )
}

export default App;