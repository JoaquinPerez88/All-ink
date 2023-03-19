

import React from 'react';
import { NavLink , Outlet } from 'react-router-dom'
import '../CSS/Barra.css'


const Navbar = () => {
  return(
      <nav className="barra1">
          <NavLink  to='/Home' >  Home </NavLink>
          <NavLink to='/Estudio' > Estudio  </NavLink>
          <NavLink to='/Contactanos' > Contactanos </NavLink>
          <NavLink to='/Diseños'> Diseños </NavLink>
          <NavLink to='/Galeria'> Galeria </NavLink>
          <NavLink to='/Productos' > Productos </NavLink>
          <Outlet />
      </nav>
  )
}

export default Navbar;

