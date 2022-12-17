import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LPage from './pages/LPage.jsx';
import Welcome from './pages/Welcome.jsx';
import Ap from './pages/Ap';
import Ap12 from './pages/Ap12';
import Ap112 from './pages/Ap112';
import Appl from './pages/Appl';
import Blo from './pages/Blo';
import Blo1 from './pages/Blo1';
import Cal from './pages/Cal';
import Cal1 from './pages/Cal1';
import Call from './pages/Call';
import Call1 from './pages/Call1';
import Car from './pages/Car';
import Car1 from './pages/Car1';
import Cli from './pages/Cli';
import Cli1 from './pages/Cli1';
import Let from './pages/Let';
import Let1 from './pages/Let1';
import Newa from './pages/Newa';
import Newa1 from './pages/Newa1';
import Schedule from './pages/Schedule';
import Schedule1 from './pages/Schedule1';
import Ser from './pages/Ser';
import Ser1 from './pages/Ser1';
import Login from './component1/Login.jsx'
import Appoint1 from './midcom/Appoint1';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LPage/>} />
        <Route path="/Welcome" element={<Welcome/>} />
        <Route path="/Ap" element={<Ap/>} />
        <Route path="/Ap12" element={<Ap12/>} />
        <Route path="/Ap112" element={<Ap112/>} />
        <Route path="/Appl" element={<Appl/>} />
        <Route path="/Blo" element={<Blo/>} />
        <Route path="/Blo1" element={<Blo1/>} />
        <Route path="/Cal" element={<Cal/>} />
        <Route path="/Cal1" element={<Cal1/>} />
        <Route path="/Call" element={<Call/>} />
        <Route path="/Call1" element={<Call1/>} />
        <Route path="/Car" element={<Car/>} />
        <Route path="/Car1" element={<Car1/>} />
        <Route path="/Cli" element={<Cli/>} />
        <Route path="/Cli1" element={<Cli1/>} />
        <Route path="/Let" element={<Let/>} />
        <Route path="/Let1" element={<Let1/>} />
        <Route path="/Newa" element={<Newa/>} />
        <Route path="/Newa1" element={<Newa1/>} />
        <Route path="/Schedule" element={<Schedule/>} />
        <Route path="/Schedule1" element={<Schedule1/>} />
        <Route path="/Ser" element={<Ser/>} />
        <Route path="/Ser1" element={<Ser1/>} />
        <Route path="/Log" element={<Login/>} />
        <Route path="/Ap1" element={<Appoint1 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
