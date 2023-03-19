

import React from 'react';
import { NavLink , Outlet } from 'react-router-dom'
import '../CSS/Barra.css'




const Navbar = () => {
  return(
      <nav className="barra1" >
          <NavLink  className='items' to='/Home' > Home </NavLink>

             
          <NavLink  className= 'items' to='/Estudio' > Estudio  </NavLink>          
          <NavLink className= 'items'  to='/Galeria'> Galeria </NavLink>
          <NavLink className= 'items'  to='/Diseños'> Diseños </NavLink>          
          <NavLink className= 'items'  to='/Productos' > Productos </NavLink>
          <NavLink className= 'items' to='/Contactanos' > Contactanos </NavLink>
          <Outlet />
        


      </nav>







  )
}

export default Navbar;

