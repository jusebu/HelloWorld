import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function IdProducto(props) {
  return <div className="idProducto">
  <b>ID. Producto: {props.id} <br /></b>
  </div>;
}

function InfoProducto(props) {
  return <div className="item">
  <b>Nombre: </b> {props.name} <br /><br />
  <b>Marca: </b> {props.marca} <br /><br />
  <b>Proveedor: </b> {props.prov} <br /><br />
  <b>Precio: </b> {props.precio} <br /><br />
  <b>Cantidad: </b> {props.cant} <br /><br />
  <b>Fecha ingreso: </b> {props.date} <br /><br />
  </div>;
}

function Botones(){
  return <div className="botones">
  <button type="button"class="btn btn-dark">Editar producto</button>
  <text> </text><button type="button"class="btn btn-dark">Atrás</button>
  </div>
}
export default function App() {
  return (
  <div>
    <IdProducto id="0001" />
    <InfoProducto name="Mouse inalámbrico"  marca="Genius" prov="Tecnológicos S.A.S." precio="$25.000" cant="15" date="25-10-2021" />
    <Botones button/>
  </div>
  );
}

