import React from 'react'
import './menu.css';
import { IoMenu, IoHome, IoPerson, IoStorefront, IoBag } from "react-icons/io5";
import { BiGridAlt, BiCart, BiHomeAlt, BiStore, BiUser } from "react-icons/bi";
import ItemCart from '../Cart/ItemCart';
import { Link } from 'react-router-dom';


let flagMenu = false;
function abrirMenuMobile() {
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

let flagBag = false;
const openBag = ()=>{
  let bag = document.getElementById("kart-mobile");
  if (!flagBag) {
    bag.classList.remove("active-bag-desktop");
    bag.classList.remove("deactive-bag-desktop");
    bag.classList.remove("position");
    bag.classList.add("active-kart");
    bag.classList.remove("deactive-kart");
    
    flagBag = true;
  } else {
    bag.classList.add("deactive-kart");
    bag.classList.remove("active-kart");
    flagBag = false;
  }
};


let flagBagDesktop = false;
const openBagDesktop = () => {
  let bagDesktop = document.getElementById("kart-mobile");

  if (!flagBagDesktop) {
    bagDesktop.classList.remove("active-kart");
    bagDesktop.classList.remove("deactive-kart");
    bagDesktop.classList.add("position");
    bagDesktop.classList.add("active-bag-desktop");
    bagDesktop.classList.remove("deactive-bag-desktop");
    flagBagDesktop = true;
  } else {
    bagDesktop.classList.add("deactive-bag-desktop");
    bagDesktop.classList.remove("active-bag-desktop");
    flagBagDesktop = false;
  }
}

export default function Menu() {
    return (
        <>
        <header className="container-fluid contenedor-menu">
            <div className="">
                <a className="menu-link"> E-Komerco </a>
            </div>
            <div className="menu-links">
                <Link to="/home"> <a className="menu-link menu-link-hide"> Inicio </a> </Link>
                <Link to="/shop"><a className="menu-link menu-link-hide"> Tienda </a></Link>
                <Link to="/about"><a className="menu-link menu-link-hide"> Contacto </a></Link>
            </div>
            <div> <BiCart className="icons-desktop menu-link-hide" onClick={openBagDesktop}/></div>
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
            <Link to="/home">
              <div className="menu-mobile-icon">
                <BiHomeAlt className="icons-mobile-link"/>
              </div>
            </Link>
            <Link to="/shop">
              <div className="menu-mobile-icon">
                <BiStore className="icons-mobile-link"/>
              </div>
            </Link>
            <Link to="/about">
              <div className="menu-mobile-icon" id="icon-about">
                <BiUser className="icons-mobile-link"/>
              </div>
            </Link>
            
        </div>
        <div className="container-kart position" id="kart-mobile">
          <div className="cart-titulo">Contenido Carrito</div>
          <ItemCart name="Burger" precio="500"/>
          <ItemCart name="Papas" precio="25.5"/>
          <ItemCart name="Gaseosa" precio="50"/>
          <button className="btn btn-primary btn-order">Hacer Pedido</button>
        </div>
        </>
        
    )
}

