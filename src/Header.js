import React, {useState} from 'react'
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler  
  } from 'reactstrap'
  import { Link } from 'react-router-dom'
  
  const Header = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
      setOpen (!open)
    }
    return (
      <Navbar color = 'light' light expand = 'md'>
        <NavbarBrand tag={Link} to='/'>Mes Series</NavbarBrand>
         <NavbarToggler onClick={toggle}/> 
          <Collapse isOpen={open} navbar>
            <nav className='ml-auto' navbar>
              <NavItem>
               <NavLink tag= {Link} to='/categories'>Categories</NavLink>
              </NavItem>
            </nav>
          </Collapse>
      </Navbar>
    )
  }

  export default Header