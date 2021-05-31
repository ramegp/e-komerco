import React from 'react'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button, ProgressBar} from 'react-bootstrap';
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput';
import './menu.css';
import { IoMenu, IoHome, IoPerson, IoStorefront, IoBag } from "react-icons/io5";

/* import logoMenu from './images/icons/menu_black_24dp.svg';
import logoHome from './images/icons/home_black_24dp.svg';
import logoShop from './images/icons/shopping_cart_black_24dp.svg';
import logoContact from './images/icons/person_black_24dp.svg';
import logoCarrito from './images/icons/shopping_bag_black_24dp.svg'; */





function abrirMenuMobile() {
    let btnMenu = document.getElementById("btn-menu-mobile");
    let MostrarMenu = document.getElementById("links-mobile");
    MostrarMenu.classList.toggle("contenedor-links-mobile-active");
    btnMenu.classList.toggle("active")
    
}

const openHome = (e) => {console.log(e.target)};
const openShop = (e)=>{console.log(e.target)};
const openContact = (e)=>{console.log(e.target)};

export default function Menu() {
    return (
        <>
        <header className="container-fluid contenedor-menu">
            <div className="">
                <a className="menu-link"> E-Komerco </a>
            </div>
            <div className="menu-links">
                <a className="menu-link menu-link-hide"> Inicio </a>
                <a className="menu-link menu-link-hide"> Tienda </a>
                <a className="menu-link menu-link-hide"> Contacto </a>
            </div>
        </header>

        <div className="menu-btn-mobile" id="btn-menu-mobile" onClick={abrirMenuMobile}>
          <IoMenu className="icons-mobile"/>
        </div>
        <div className="contenedor-links-mobile" id="links-mobile">
            <div className="menu-mobile-icon" onClick={openHome}>
              <IoHome className="icons-mobile-link"/>
            </div>
            <div className="menu-mobile-icon" onClick={openShop}>
              <IoStorefront className="icons-mobile-link"/>
            </div>
            <div className="menu-mobile-icon" onClick={openContact}>
              <IoPerson className="icons-mobile-link"/>
            </div>
        </div>
        <div className="btn-carrito-mobil" id="carrito-compras-mobile">
          <IoBag className="icons-mobile"/>
        </div>
        </>
        
    )
}

