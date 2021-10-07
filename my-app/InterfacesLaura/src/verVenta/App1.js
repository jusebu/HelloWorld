import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function IdVenta(props) {
  return <div className="idVenta">
  <b>ID. Venta: {props.id} <br /></b>
  </div>;
}
function InfoVenta(props) {
  return <div className="columna1">
  <b>Nombre del cliente</b> <br /> {props.name} <br />
  <b>Documento de identidad</b> <br /> {props.DocId}
  </div>;
}
function InfoVenta2(props) {
  return <div className="columna2">
  <b>Fecha: </b> {props.fecha} <br /><br />
  <b>Vendedor</b> <br /> {props.vendedor}
  </div>;
}
function TablaVentas(){
  return <div className="tabla">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">ID. Producto</th>
      <th scope="col">Nombre del producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">0001</th>
      <td>Monitor ergonómico Asus</td>
      <td>1</td>
      <td>$920.999,99</td>
    </tr>
  </tbody>
</table>
</div>
}
function Botones(){
  return <div className="botones">
  <button type="button"class="btn btn-dark">Editar venta</button>
  <text> </text><button type="button"class="btn btn-dark">Atrás</button>
  </div>
}

export default function App() {
  return (
  <div>
    <p>Productos vendidos</p>
    <IdVenta id="00001" />
    <InfoVenta name="Julian Rojas"  DocId="1024587935" />
    <InfoVenta2 fecha="25-10-2021" vendedor="Vendedor 1" />
    <TablaVentas table/>
    <Botones button/>
  </div>
  );
}

