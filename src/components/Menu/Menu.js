import React from 'react'
import './menu.css';
import { IoMenu, IoHome, IoPerson, IoStorefront, IoBag } from "react-icons/io5";
import { BiGridAlt, BiCart, BiHomeAlt, BiStore, BiUser } from "react-icons/bi";
import ItemCart from '../Cart/ItemCart';
/* import Main from '../Main' */

let flagMenu = false;
function abrirMenuMobile() {
    let btnMenu = document.getElementById("btn-menu-mobile");

    let MostrarMenu = document.getElementById("links-mobile");
    if (!flagMenu) {
      MostrarMenu.classList.add("activar-contenedor-menu-link");
      MostrarMenu.classList.remove("desactivar-contenedor-menu-link");
      flagMenu = true;
    } else {
      MostrarMenu.classList.add("desactivar-contenedor-menu-link");
      MostrarMenu.classList.remove("activar-contenedor-menu-link");
      flagMenu = false;
    }
    
}

const openHome = (e) => {
  let linkHome = document.getElementById("home");
  let linkContac = document.getElementById("about");
  let linkShop = document.getElementById("shop");
  linkContac.style.display ="none";
  linkShop.style.display ="none"
  linkHome.style.display = "block"
  window.location.href ="#home"
};
const openShop = (e)=>{
  let linkHome = document.getElementById("home");
  let linkContac = document.getElementById("about");
  let linkShop = document.getElementById("shop");
  linkHome.style.display ="none";
  linkContac.style.display = "none";
  linkShop.style.display ="block"
  window.location.href ="#about";
};
const openContact = (e)=>{
  
  let linkHome = document.getElementById("home");
  let linkContac = document.getElementById("about");
  let linkShop = document.getElementById("shop");
  linkHome.style.display ="none";
  linkShop.style.display ="none"
  linkContac.style.display = "block";
  window.location.href ="#about";
};

let flagBag = false;
const openBag = ()=>{
  let bag = document.getElementById("kart-mobile");
  if (!flagBag) {
    bag.classList.add("active-kart");
    bag.classList.remove("deactive-kart");
    flagBag = true;
  } else {
    bag.classList.add("deactive-kart");
    bag.classList.remove("active-kart");
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

        <div className=" container-menu-mobile">
          <div className="menu-btn-mobile" id="btn-menu-mobile" onClick={abrirMenuMobile}>
            <IoMenu className="icons-mobile"/>
            <p className="text-menu-mobile text-mobile-menu">Menu</p>
          </div>
          <div className="btn-carrito-mobil" id="carrito-compras-mobile" onClick={openBag}>
            <BiCart className="icons-mobile icon-carrito"/>
            <p className="text-menu-mobile text-carrito-mobile">Carrito</p>
          </div>
        </div>

        <div className="contenedor-links-mobile" id="links-mobile">
            <div className="menu-mobile-icon" onClick={openHome}>
              <BiHomeAlt className="icons-mobile-link"/>
            </div>
            <div className="menu-mobile-icon" onClick={openShop}>
              <BiStore className="icons-mobile-link"/>
            </div>
            <div className="menu-mobile-icon" onClick={openContact} id="icon-about">
              <BiUser className="icons-mobile-link"/>
            </div>
        </div>
        <div className="container-kart" id="kart-mobile">
          <ItemCart name="Burger" precio="$500"/>
          <ItemCart name="Burger" precio="$500"/>
          <ItemCart name="Burger" precio="$500"/>
        </div>


        {/* <div className="contenedor-carrito" id="bag-mobile"></div> */}
        
        {/* <Main/> */}
        </>
        
    )
}

