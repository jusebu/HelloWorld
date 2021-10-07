import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
Container,
FormGroup,
} from 'reactstrap';


function Botones(){
  return <div className="botones">
  <button type="button"class="btn btn-dark">Guardar cambios</button>
  <text> </text><button type="button"class="btn btn-danger">Cancelar</button>
  </div>
}
const data = 
  { name:"Carolina Huertas", cc:"1024587935", rol:"Vendedor", email:"carohuertas@gmail.com", tel:"3125261386" }


class App extends React.Component {
  state = {
    data: data,
    form: {
      cc: "",
      name: "",
      rol: "",
      email: "",
      tel: "",
    },
  };
  editar = (dato) => {

    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
      }
      contador++;
    });
   
    this.setState({ data: arreglo,});
  };
  render() {
    
    return (
        <Container>
    <Botones button/>
    <h2><b>Editar Usuario</b></h2>
        <br />
          <br />
          <br />
          <br />
          <br />
              <FormGroup>
              <label>
              Doc. identidad:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.cc}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
              Nombre: 
              </label>
              <input
                className="form-control"
                name="Nombre"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.name}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Rol: 
              </label>
              <input
                className="form-control"
                name="rol"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.rol}
              />
            </FormGroup>
            <FormGroup>
              <label>
                E-mail: 
              </label>
              <input
                className="form-control"
                name="email"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.email}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Teléfono: 
              </label>
              <input
                className="form-control"
                name="teléfono"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.tel}
              />
            </FormGroup>
          
       </Container>
    )
  }
}
export default App;