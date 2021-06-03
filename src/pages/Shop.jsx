import React from 'react';
import '../components/Shop/Shop.css';
import Card from '../components/Cards/CardsItem';
import Card2 from '../components/Cards/Cards2'

function Shop() {
    return (
        <div className ="container-shop container" id="shop">
            <h4 className="titulo-shop">Tienda E-komerco productos</h4>
            <Card />
            <Card2 name="CONTROL PS5" description="Control de la play 5 dual sense distintos colores para elegir" price="$50"/>
        </div>
    )
}

export default Shop
