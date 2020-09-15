import React, {Component} from "react";

class Buscador extends Component {
    busquedaRef = React.createRef();
   
    getUserData = (e) =>{
        e.preventDefault();

        console.log(this.busquedaRef.current.value);//current hace referencia al nombre tecleado por el usuario.
        const term = this.busquedaRef.current.value;
        this.props.handleDataSearch(term);
    }

    render(){
        return(
            <form onSubmit={this.getUserData}>
                <div className="row">
                    <div className="form-group col-md-8">
                      <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen."/>
                     </div>
                     <div className="form-group col-md-4">
                      <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar.."/>
                     </div>
                </div>
            </form>
        );
    }
};

export default Buscador;