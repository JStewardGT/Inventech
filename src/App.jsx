import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import Singup from "./Pages/Singup";
import Footer from './Components/Footer';
import Header from './Components/Header';
import UsersPanel from "./Pages/UsersPanel";
import Maintenance from "./Pages/Maintenance";
import PageError from "./Pages/PageError/PageError";
import DeviceManagement from "./Pages/DeviceManagement";
import ObservationsCard from './Pages/ObservationsCard';



function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Sergio */}
        <Route path="/" element={<Login/>}/>
        <Route path="/singup" element={<Singup/>}/>
        {/* Johan */}
        <Route path="*" element={<PageError/>} />
        {/* Wendy */}
        <Route path="/usersPanel" element={<UsersPanel />} /> 
        {/* Lorena */}
        <Route path="/deviceManagment" element={<DeviceManagement/>}/>
        {/* Johan */}
        <Route path="/maintenance" element={<Maintenance/>}/>
        <Route path="/observations/:id" element={<ObservationsCard/>}/>
        <Route path="/observations/:id/:id" element={<ObservationsCard/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
