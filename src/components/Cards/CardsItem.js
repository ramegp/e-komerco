import "./CardsItem.css";
import React from "react";

function CardsItem(props) {

  const handleAddItem = (e) => {
    //Saco todos los productos
    let allProduct = JSON.parse(localStorage.getItem("productos"));
    //Obtengo los productos ya cargados en el carrito
    let addProdToCart = JSON.parse(localStorage.getItem("cart"));
    localStorage.removeItem("cart");
    let temporalCart = [];
    //agrego los productos que ya fueron seleccionados
    for (let prod of addProdToCart) {
      temporalCart.push(prod)
    };
    //agrego el producto nuevo
    temporalCart.push(allProduct[props.id]);
    //cargo en el localstorage el cart
    localStorage.setItem("cart", JSON.stringify(temporalCart));
    
  }

  return (
    <div className="card card-body card-body-margin" id={`card-prod-${props.id}`}>
      <div className="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
        <div className="mr-2 mb-3 mb-lg-0">
          {" "}
          <img
            src="https://i.imgur.com/5Aqgz7o.jpg"
            width="150"
            height="150"
            alt=""
          />{" "}
        </div>
        <div className="media-body">
          <h6 className="media-title font-weight-semibold">
            {" "}
            <a href="#" data-abc="true">
              {props.name}
            </a>{" "}
          </h6>
          <ul className="list-inline list-inline-dotted mb-3 mb-lg-2">
            <li className="list-inline-item">
              <a href="#" className="text-muted" data-abc="true">
                {props.category}
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-muted" data-abc="true">
                Mobiles
              </a>
            </li>
          </ul>
          <p className="mb-3">
            {props.description}
          </p>
        </div>
        <div className="mt-3 mt-lg-0 ml-lg-3 text-center">
          <h3 className="mb-0 font-weight-semibold">$ {props.price}</h3>
          <div>
            {" "}
            <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
            <i className="fa fa-star"></i> <i className="fa fa-star"></i>{" "}
          </div>
          <button type="button" className="btn btn-warning mt-4 text-white" onClick={handleAddItem}>
            <i className="icon-cart-add mr-2"></i>Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default CardsItem;
