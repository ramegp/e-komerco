import './Cards2.css';
import React from 'react'

function Cards2(props) {
    return (
        <div className="card-product">
            <div className="card-img">
                <div className="card-titulo">{props.name}</div>
                <img className="img-size" src="https://i.imgur.com/ckSgzLQ.png" alt="product:"/>
            </div>
            <div className="card-description">
                <div className="description">{props.description}</div>
                <div className="extra-product">Extra...</div>
                <div className="container-btn">
                    <div className="price-num">{props.price}</div>
                    <button className="btn btn-primary btn-add-cart">Agregar</button>
                </div>
            </div>
        </div>
        )
}

export default Cards2
