import React from "react";
import { formatoCLP } from "../../../assets/utils/utils";

const CardPizza = ({ imagen, nombre, ingredientes, precio }) => {
  return (


    <div className="card m-3">
      <div className="containerCartaImagen">
      <img src={imagen} className="card-img-top cartaImagen" alt={nombre} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <hr />
        <p className="text-center">Ingredientes: </p>
        <p className="card-text">🍕 {ingredientes.join(', ')}</p>
        <hr />
        <p className="card-text text-center"><strong>Precio: </strong>{formatoCLP(precio)}</p>
        <hr />
        <div className="d-flex justify-content-between">
        <a href="#" className="btn btn-light border-dark">
          Ver más 👀
        </a>
        <a href="#" className="btn btn-dark">
          Añadir 🛒
        </a>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
