import React from "react";
import "./Shop.css";
import ListaProductos from "../../components/ShowProducts/ShowProducts";

function Shop() {
  /* const getProducts = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const error = Math.random() > 0.7;
            if (!error) {
              resolve(productos);
            } else {
              reject("hubo un error");
            }
          }, 1500);
        });
      }; */

  return (
    <div className="container-shop container-fluid" id="shop">
      <h4 className="pt-5 mt-5 titulo-shop">Tienda E-komerco productos</h4>
      <ListaProductos />

      {/* <Card2 name="CONTROL PS5" description="Control de la play 5 dual sense distintos colores para elegir" price="$50"/> */}
    </div>
  );
}

export default Shop;
