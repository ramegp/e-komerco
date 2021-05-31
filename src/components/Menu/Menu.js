import React from 'react'
import './menu.css';
import { IoMenu, IoHome, IoPerson, IoStorefront, IoBag } from "react-icons/io5";



function abrirMenuMobile() {
    let btnMenu = document.getElementById("btn-menu-mobile");
    let MostrarMenu = document.getElementById("links-mobile");
    MostrarMenu.classList.toggle("contenedor-links-mobile-active");
    btnMenu.classList.toggle("active")
    
}

const openHome = (e) => {console.log(e.target)};
const openShop = (e)=>{console.log(e.target)};
const openContact = (e)=>{console.log(e.target)};

let flagBag = false;
const openBag = ()=>{
  let bag = document.getElementById("bag-mobile");
  if (!flagBag) {
    bag.classList.add("activar-animacion-carrito");
    bag.classList.remove("desactivar-animacion-carrito");
    flagBag = true;
  } else {
    bag.classList.add("desactivar-animacion-carrito");
    bag.classList.remove("activar-animacion-carrito");
    flagBag = false;
  }
};


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
            <div> <IoBag className="icons-desktop menu-link-hide"/> </div>
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
        <div className="btn-carrito-mobil" id="carrito-compras-mobile" onClick={openBag}>
          <IoBag className="icons-mobile"/>
        </div>
        <div className="contenedor-carrito" id="bag-mobile">
        </div>
        <div className="contador-items-bag">0</div>
        </>
        
    )
}

