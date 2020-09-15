import React, {Component} from "react";
import Imagenes from "./Imagenes";
import Paginacion from "./Paginacion";

class Resultado extends Component {
    showImages(){
        const images = this.props.images;
        if (images.length === 0) {
            return null;
        }
        //console.log(images)
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {images.map(img => (
                        <Imagenes
                            key={img.id}
                            img={img}
                        />
                    ))}
                </div>
                <Paginacion
                    previewPage = {this.props.previewPage}
                    nextPage = {this.props.nextPage}
                />
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
                {this.showImages()}
            </React.Fragment>
        );
    }
};

export default Resultado;