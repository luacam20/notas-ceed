import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
import ListaCategorias from "./components/ListaCategorias";
import Categorias from "./dados/Categorias";
import ArrayNotas from "./dados/Notas";

class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaCategorias 
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas 
            notas={this.notas.notas}
            apagarNota = {this.notas.deletarNota}  
          />
        </main>
       
      
      </section>
    );
  }
}


export default App;
