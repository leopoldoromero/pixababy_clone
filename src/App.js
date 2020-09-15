import React from 'react';
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends React.Component {

  state = {
    term: "",
    images: [],
    page: "",
  }

  scroll = ()=> {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("smooth", "end");

  }

  nextPage = () => {
    //console.log("next");
    //leer state pagina actual
    let page = this.state.page;
    //sumar uno a la pagina actual
    page += 1;
    //agregar cambio al state
    this.setState({
      page
    }, () => {
      this.consultApi();
      this.scroll();
    });
    console.log(page);
  }

  previewPage = () => {
    //console.log("prev");
       //leer state pagina actual
       let page = this.state.page;
       //verificar si la pagina es 1.
       if (page === 1) return null;
       //restar uno a la pagina actual
       page -= 1;
       //agregar cambio al state
       this.setState({
         page
       }, () => {
         this.consultApi();
         this.scroll();
       });
       console.log(page);
  }

  consultApi() {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=17725088-aca70250aa2bcd19a3d88ea1d&q=${term}&image_type=photo&per_page=9&page=${page}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({images: result.hits}))
  }

  handleDataSearch = (term) => {
    this.setState({
      term: term,
      page: 1
    }, ()=> {
      this.consultApi();
    })
  }
  render () {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
  
          <Buscador
          handleDataSearch = {this.handleDataSearch}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
          images = {this.state.images}
          previewPage = {this.previewPage}
          nextPage = {this.nextPage}
          />
        </div>
      </div>
    );
  }
}

export default App;
