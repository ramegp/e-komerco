import React from "react";
import Card from "../../components/Cards/CardsItem";

/* Import productos */
import productos from "../../products.json";
localStorage.setItem("productos", JSON.stringify(productos))




function ShowProducts() {
  return (
    <div className="container-fluid d-flex flex-wrap">
      {productos.map((prod,index) => {
        return (
          <>
            <Card
              name={prod.name}
              description={prod.description}
              category={prod.category}
              price={prod.price}
              id={index}
            />
          </>
        );
      })}
    </div>
  );
}

export default ShowProducts;
