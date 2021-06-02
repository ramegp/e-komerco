import './ItemCart.css';
import React from 'react';
import { BiTrash, BiPlus } from "react-icons/bi";


/* let flagBag = false;
const openBag = ()=>{
  let bag = document.getElementById("kart-mobile");
  if (!flagBag) {
    bag.classList.add("active-kart");
    bag.classList.remove("deactive-kart");
    flagBag = true;
    console.log(flagBag)
  } else {
    bag.classList.add("deactive-kart");
    bag.classList.remove("active-kart");
    flagBag = false;
    console.log(flagBag)
  }
};
 */

function ItemCart(props) {
    return (
        <div className="container-item" id="cart-item">
            <div>{props.name}</div>
            <div>{props.precio}</div>
            
            <div className="cart-item-btns">
            <div><BiPlus/></div>
            <div><BiTrash/></div>
            </div>
        </div>
    )
}

export default ItemCart
