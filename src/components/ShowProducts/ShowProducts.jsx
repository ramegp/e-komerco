import React, { useState, useEffect } from "react";
import Card from "../../components/Cards/CardsItem";

/* Import productos */
/* import productos from "../../products.json";
localStorage.setItem("productos", JSON.stringify(productos)); */

function ShowProducts(props) {
  const [productos, setData] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  return (
    <div className="container-fluid d-flex flex-wrap">

      {productos !== null ? (productos.map((prod, index) => {
        return (
          <>
            <Card
              name={prod.title}
              description={prod.description}
              category={prod.category}
              price={prod.price}
              id={index}
              img={prod.image}
              function={props.function}
            />
          </>
        );
      })) :(<h2>Cargando datos</h2>)}

      

    </div>
  );
}

export default ShowProducts;
