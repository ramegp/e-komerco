import './ItemCart.css';
import React, {useState} from 'react';
import { BiTrash, BiPlus, BiMinus } from "react-icons/bi";


function ItemCart(props) {
  const [count, setCount] = useState(0)
  function handleSubtract() {
    count >= 1 ? setCount(count -1) : setCount(0);
  }

  function handleAdd() {
    setCount(count +  1)
  }
  function handleTrash(event) {
    console.log(event.target)
  }

    return (
        <div className="container-item" id="cart-item">
            <div>{props.name}</div>
            <div>$ {parseFloat(props.precio)*count}</div>
            
            <div className="cart-item-controls">
              <div onClick={handleSubtract}><BiMinus/></div>
              <div className="cart-item-amount">{count}</div>
              <div className="cart-item-icon-add" onClick={handleAdd}><BiPlus/></div>
              <div onClick={handleTrash}><BiTrash/></div>
            </div>
        </div>
    )
}

export default ItemCart
