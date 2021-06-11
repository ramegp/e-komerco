import React from "react";
import ItemCart from '../Cart/ItemCart'

function ShowItemsBag() {
  let itemsCart = JSON.parse(localStorage.getItem("cart"));
  return (
    <>
      {itemsCart.map((prod) => {
        return (
          <>
            <ItemCart name={prod.name} precio={prod.price} />
          </>
        );
      })}
    </>
  );
}

export default ShowItemsBag;
