import "./ItemCart.css";
import React, { useState } from "react";
import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";

import foto from '../../assets/images/hamburger.jpg';

const MIN = 1;
const MAX = 10;

function ItemCart(props) {
  const [count, setCount] = useState(1);
  function handleSubtract() {
    count >= MIN ? setCount(count - 1) : setCount(1);
  }

  function handleAdd() {
    count < MAX ? setCount(count + 1) : setCount(MAX);
  }
  function handleTrash(event) {
    console.log(event.target);
  }

  return (
    <div className="container-item" id="cart-item">
      <div className="col-2 cart-item-img">
        <image className="item-img" src={foto} />
      </div>
      <div className="col-9">
        <div className="cart-item-titulo">
          <div>{props.name}</div>
          <div> $ {props.precio * count}</div>

        </div>

        <div className="cart-item-controls">
          <div className="cart-item-amount d-flex justify-content-between">Cantidad <span>{count}</span></div>


          <div className="btn-group d-flex justify-content-between">
            <button className="btn text-light" onClick={handleSubtract}><BiMinus /></button>
            <button className="btn text-light" onClick={handleTrash}><BiTrash /></button>
            <button className="btn text-light" onClick={handleAdd}><BiPlus /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCart;
