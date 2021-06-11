import React, { useEffect, useState } from "react";
import "./Shop.css";
import ListaProductos from "../../components/ShowProducts/ShowProducts";

function Shop() {

  const [itemsCART, setItemsCART] = useState([])
    
  useEffect(()=>{console.log(itemsCART)})
  
  const handleADDITEMS = (a,b) => {
    setItemsCART([...itemsCART,{
      id: itemsCART.length,
      value: "hola"
    }]);
    
  }

  return (
    <div className="container-shop container-fluid" id="shop">
      <h4 className="pt-5 mt-5 titulo-shop">Tienda E-komerco productos</h4>
      <ListaProductos function={handleADDITEMS}/>

      {/* <Card2 name="CONTROL PS5" description="Control de la play 5 dual sense distintos colores para elegir" price="$50"/> */}
    </div>
  );
}

export default Shop;
