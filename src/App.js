
import { Routes,
  Route } from 'react-router-dom'
import './CSS/App.css'
import Home from './componentes/Home'
import Contactanos from './componentes/Contactanos'
import Diseños from './componentes/Diseños'
import Estudio from './componentes/Estudio'
import Footer from './componentes/Footer'
import Galeria from './componentes/Galeria'
import Navbar from './componentes/Navbar'
import Productos from './componentes/Productos'
import React from 'react'



function App() {
  return (
 
  <>
    <Navbar />

      <div >
        <Routes>
               <Route index element ={<Home/>} ></Route>
               <Route path ="/Contactanos" element={<Contactanos/>} ></Route> 
               <Route path="/Diseños" element={<Diseños/>}></Route>
               <Route path="/Estudio" elemnt={<Estudio/>}></Route>
               <Route path="/Galeria" elemt={<Galeria/>}></Route>
               <Route path="/Productos" elemnt={<Productos/>}></Route>
        </Routes> 

      </div>

    
    
    </>
  );
}

export default App;
