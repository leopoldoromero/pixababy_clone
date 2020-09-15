import React from "react";

const Paginacion = props => {
    return(
        <div className="py-3">
            <button onClick={props.previewPage} type="button" className="btn btn-info mr-1">Preview &larr;</button>
            <button onClick={props.nextPage} type="button" className="btn btn-info ">Next &rarr;</button>
        </div>
    );
}

export default Paginacion;