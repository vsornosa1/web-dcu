import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home.component';
import Login from './routes/auth/Login.component';


const App = () => {

  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Home isAnonimo={false} />} />
      <Route path="anonimo" element={<Home isAnonimo />} />
    </Routes>
  )
}

export default App;